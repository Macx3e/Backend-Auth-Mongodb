const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");

dotenv.config(); // Cargar variables de entorno
connectDB(); // Conectar a MongoDB

const app = express();
app.use(express.json()); // Middleware para procesar JSON

// ✅ **Definir rutas**
app.use("/api/user", userRoutes);
app.use("/api/product", productRoutes);

// **Manejo de errores generales**
app.use((err, req, res, next) => {
  console.error("❌ Error en el servidor:", err.message);
  res.status(500).json({ message: "Error interno del servidor" });
});

// **Definir puerto del servidor**
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Servidor corriendo en el puerto ${PORT}`));
require("dotenv").config();
