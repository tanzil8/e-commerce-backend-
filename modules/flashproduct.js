import mongoose from 'mongoose';

// Define the FlashProduct schema
const flashProductSchema = new mongoose.Schema({
  photo: {
    type: String,
   
  },
  name: {
    type: String,
    required: true, // name is required
    minlength: 3, // Example validation: product name should have at least 3 characters
    maxlength: 100, // Example validation: product name should not exceed 100 characters
  },
  price: {
    type: Number,
    required: true, // price is required
    min: 0, // Example validation: price should not be negative
  },
}, { timestamps: true }); // Automatically adds `createdAt` and `updatedAt` fields

// Create and export the model
const FlashProduct = mongoose.model('FlashProduct', flashProductSchema);

export default FlashProduct;
