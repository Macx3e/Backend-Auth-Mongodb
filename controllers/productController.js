const Product = require("../models/productModel");

// **Crear un producto**
const createProduct = async (req, res) => {
  try {
    console.log("✅ Se ha ejecutado `createProduct`");

    const { user, name, description, price } = req.body; 

    if (!user || !name || !description || !price) {
      console.log("❌ Faltan datos en la solicitud.");
      return res.status(400).json({ message: "Todos los campos son obligatorios" });
    }

    const product = await Product.create({
      user,
      name,
      description,
      price,
    });

    console.log("✅ Producto creado:", product);
    res.status(201).json({ message: "Producto creado correctamente", product });

  } catch (error) {
    console.error("❌ Error en `createProduct`:", error.message);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

// **Leer todos los productos**
const getAllProducts = async (req, res) => {
  try {
    console.log("✅ Se ha ejecutado `getAllProducts`");

    const products = await Product.find().populate("user", "name email");

    if (products.length === 0) {
      console.log("❌ No hay productos en la base de datos.");
      return res.status(404).json({ message: "No hay productos disponibles" });
    }

    console.log("✅ Productos encontrados:", products.length);
    res.status(200).json(products);

  } catch (error) {
    console.error("❌ Error en `getAllProducts`:", error.message);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

// **Leer un producto específico**
const getProductById = async (req, res) => {
  try {
    console.log("✅ Se ha ejecutado `getProductById`");

    const product = await Product.findById(req.params.id).populate("user", "name email");

    if (!product) {
      console.log("❌ Producto no encontrado.");
      return res.status(404).json({ message: "Producto no encontrado" });
    }

    console.log("✅ Producto encontrado:", product);
    res.status(200).json(product);

  } catch (error) {
    console.error("❌ Error en `getProductById`:", error.message);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

// **Actualizar un producto**
const updateProduct = async (req, res) => {
  try {
    console.log("✅ Se ha ejecutado `updateProduct`");

    const { name, description, price } = req.body;
    const product = await Product.findById(req.params.id);

    if (!product) {
      console.log("❌ Producto no encontrado.");
      return res.status(404).json({ message: "Producto no encontrado" });
    }

    product.name = name || product.name;
    product.description = description || product.description;
    product.price = price || product.price;

    await product.save();

    console.log("✅ Producto actualizado:", product);
    res.status(200).json({ message: "Producto actualizado correctamente", product });

  } catch (error) {
    console.error("❌ Error en `updateProduct`:", error.message);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

// **Eliminar un producto**
const deleteProduct = async (req, res) => {
  try {
    console.log("✅ Se ha ejecutado `deleteProduct`");

    const product = await Product.findById(req.params.id);

    if (!product) {
      console.log("❌ Producto no encontrado.");
      return res.status(404).json({ message: "Producto no encontrado" });
    }

    await product.deleteOne();

    console.log("✅ Producto eliminado.");
    res.status(200).json({ message: "Producto eliminado correctamente" });

  } catch (error) {
    console.error("❌ Error en `deleteProduct`:", error.message);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

// ✅ **Exportar correctamente todas las funciones**
module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
