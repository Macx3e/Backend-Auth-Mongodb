const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");

// **Login de usuario con generación de JWT**
const loginUser = async (req, res) => {
  try {
    console.log("✅ Se ha ejecutado `loginUser`");

    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      console.log("❌ Email no registrado.");
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      console.log("❌ Contraseña incorrecta.");
      return res.status(401).json({ message: "Contraseña incorrecta" });
    }

    // **Generar JWT**
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    console.log("✅ Usuario autenticado con éxito.");
    res.status(200).json({ message: "Login exitoso", token });

  } catch (error) {
    console.error("❌ Error en `loginUser`:", error.message);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

// **Verificación de token JWT**
const verifyToken = async (req, res) => {
  try {
    console.log("✅ Se ha ejecutado `verifyToken`");

    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      console.log("❌ Token no proporcionado.");
      return res.status(401).json({ message: "Acceso denegado, se requiere un token" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    console.log("✅ Token válido, usuario autenticado.");
    res.status(200).json({ message: "Token válido", userId: decoded.id });

  } catch (error) {
    console.error("❌ Error en `verifyToken`:", error.message);
    res.status(401).json({ message: "Token inválido o expirado" });
  }
};

module.exports = { loginUser, verifyToken };
