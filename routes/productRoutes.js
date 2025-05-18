const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct
} = require("../controllers/productController");

const router = express.Router();

router.post("/create", authMiddleware, createProduct);
router.get("/readall", getAllProducts);
router.get("/readone/:id", getProductById);
router.put("/update/:id", authMiddleware, updateProduct);
router.delete("/delete/:id", authMiddleware, deleteProduct);

module.exports = router;
