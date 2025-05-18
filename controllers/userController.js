const bcrypt = require("bcryptjs");
const User = require("../models/userModel");

// **Actualizar información del usuario**
const updateUser = async (req, res) => {
  try {
    console.log("✅ Se ha ejecutado `updateUser`");

    const { name, email, password } = req.body;
    const user = await User.findById(req.params.id);

    if (!user) {
      console.log("❌ Usuario no encontrado.");
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    // **Verificar si el nuevo email ya está en uso**
    if (email && email !== user.email) {
      const emailExists = await User.findOne({ email });
      if (emailExists) {
        console.log("❌ Email ya registrado:", email);
        return res.status(400).json({ message: "El email ya está en uso" });
      }
    }

    // **Si hay nueva contraseña, encriptarla**
    let hashedPassword = user.password;
    if (password) {
      console.log("🔍 Generando hash de nueva contraseña...");
      const salt = await bcrypt.genSalt(10);
      hashedPassword = await bcrypt.hash(password, salt);
    }

    // **Actualizar datos**
    user.name = name || user.name;
    user.email = email || user.email;
    user.password = hashedPassword;

    await user.save();

    console.log("✅ Usuario actualizado:", user);
    res.status(200).json({ message: "Usuario actualizado correctamente", user });

  } catch (error) {
    console.error("❌ Error en `updateUser`:", error.message);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

module.exports = { updateUser };
