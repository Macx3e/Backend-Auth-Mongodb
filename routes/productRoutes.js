const express = require("express");
const { 
  createProduct, 
  getAllProducts, 
  getProductById, 
  updateProduct, 
  deleteProduct 
} = require("../controllers/productController");

const router = express.Router();

// ✅ **Definir rutas para CRUD de productos**
router.post("/create", createProduct);
router.get("/readall", getAllProducts);
router.get("/readone/:id", getProductById);
router.put("/update/:id", updateProduct);
router.delete("/delete/:id", deleteProduct);

module.exports = router;
