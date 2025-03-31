import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  ref: String,
  location: String,
  stock: Number,
  description: String,
  bar_code: String,
});

const Product = mongoose.model("Product", productSchema);

export default Product;
