const express = require("express");
const { loginUser, verifyToken } = require("../controllers/userController");

const router = express.Router();

// ✅ **Definir rutas**
router.post("/login", loginUser); // Login con generación de JWT
router.get("/verifytoken", verifyToken); // Verificación de token

module.exports = router;
