const bcrypt = require("bcryptjs");
const User = require("../models/userModel");

// **Registrar usuario**
const registerUser = async (req, res) => {
  try {
    console.log("✅ Se ha ejecutado `registerUser`");

    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      console.log("❌ Faltan datos en la solicitud.");
      return res.status(400).json({ message: "Todos los campos son obligatorios" });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      console.log("❌ Usuario ya registrado:", email);
      return res.status(400).json({ message: "El usuario ya está registrado" });
    }

    console.log("🔍 Generando hash de contraseña...");
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    console.log("🔍 Contraseña encriptada:", hashedPassword);

    const user = new User({ name, email, password: hashedPassword });
    await user.save();

    console.log("✅ Usuario registrado correctamente:", user);
    res.status(201).json({ message: "Usuario registrado correctamente", user });

  } catch (error) {
    console.error("❌ Error en `registerUser`:", error.message);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

// **Login de usuario**
const loginUser = async (req, res) => {
  try {
    console.log("✅ Se ha ejecutado `loginUser`");

    const { email, password } = req.body;

    if (!email || !password) {
      console.log("❌ Faltan datos en la solicitud.");
      return res.status(400).json({ message: "Todos los campos son obligatorios" });
    }

    console.log("🔍 Buscando usuario con email:", email);
    const user = await User.findOne({ email });

    if (!user) {
      console.log("❌ Usuario no encontrado.");
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    console.log("🔍 Comparando contraseña ingresada con la almacenada...");
    const isMatch = await bcrypt.compare(password, user.password);
    console.log("🔍 Resultado de `bcrypt.compare()`: ", isMatch);

    if (!isMatch) {
      console.log("❌ Contraseña incorrecta.");
      return res.status(401).json({ message: "Contraseña incorrecta" });
    }

    console.log("✅ Login exitoso.");
    res.json({ message: "✅ Login exitoso", user });

  } catch (error) {
    console.error("❌ Error en `loginUser`:", error.message);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

// ✅ **Exportar correctamente las funciones**
module.exports = { registerUser, loginUser };
