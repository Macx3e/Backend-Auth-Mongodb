const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Relación con el usuario
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
}, { timestamps: true });

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
