const asyncHandler = require("../middleware/asyncHandler");
const Product = require("../models/Product");

// GET all products
// on an order and on the dashboard

const getProducts = asyncHandler(async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

// GET a product on an order and on the dashboard (by id)
// Getting a product from an order, there should be a link attached to each product redirecting them to the single product.
const getProductbyId = async (req, res) => {
  try {
    const product = await Product.findById(req.params._id);
    if (!product) {
      return res.status(404).json({ error: "product not found" });
    }
    res.json(product);
  } catch (error) {
    console.error(error);
  }
};

// CREATE(post) a product
// user not authorized to do
const createProduct = async (req, res) => {
  try {
    const productData = await Product.create(req.body);
    res.json(productData);
  } catch (error) {
    console.error(error);
  }
};

// UPDATE(put) a product (by id)
// ratings? maybe in the future as we work on the project
const updateProduct = async (req, res) => {
  try {
    const newProductData = await Product.findByIdAndUpdate(
      req.params._id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!newProductData) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json(newProductData);
  } catch (error) {
    console.error(error);
  }
};

// DELETE a product (by id)
// user should not be authorized to delete products or edit there order
const deleteProduct = async (req, res) => {
  try {
    const productUser = await Product.findByIdAndRemove(req.params._id);
    if (!deleteProduct) {
      return res.status(404).json({ message: "No product with this id!" });
    }
    res.json("Product successfully deleted!");
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getProducts,
  getProductbyId,
};
