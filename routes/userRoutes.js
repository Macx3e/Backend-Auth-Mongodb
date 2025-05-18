const express = require("express");
const { updateUser } = require("../controllers/userController");

const router = express.Router();

// ✅ **Definir rutas**
router.put("/update/:id", updateUser); // Actualizar usuario

module.exports = router;
