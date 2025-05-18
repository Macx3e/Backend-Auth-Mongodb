const express = require("express");
const { registerUser, loginUser } = require("../controllers/userController");

const router = express.Router();

// **Verificar que `registerUser` y `loginUser` existen**
if (typeof registerUser !== "function") {
  console.error("❌ Error: `registerUser` no es una función válida.");
}
if (typeof loginUser !== "function") {
  console.error("❌ Error: `loginUser` no es una función válida.");
}

// ✅ Registrar rutas correctamente
router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;
