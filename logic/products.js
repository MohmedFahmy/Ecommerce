const req = require("express/lib/request");
const res = require("express/lib/response");

const PRODUCTS =require('../model/products');


module.exports ={
     getAllProducts : async (req, res) => {
        try {
            const products = await PRODUCTS.find(); // Fetch all products
    
            res.status(200).json({
                message: 'Products retrieved successfully!',
                products: products, // Return all product details
            });
        } catch (error) {
            console.error('Error retrieving products:', error); // Log the error
    
            res.status(500).json({
                message: 'Error retrieving products',
                error: error.message,
            });
        }
    },
    insertProducts: async (req, res) => {
        try {
            console.log(req.body); // Log the request body for debugging
    
            const product = new PRODUCTS({
                name: req.body.productName,
                price: req.body.productPrice,
                details: req.body.productDetails,
            });
    
            await product.save();
    
            res.status(201).json({
                message: 'Product created successfully!',
                id:product.id,
                name:product.productName,
                price:product.productPrice,
                details:product.productDetails,
            });
        } catch (error) {
            console.error('Error saving product:', error); // Log the error
    
            if (error.name === 'ValidationError') {
                return res.status(400).json({
                    message: 'Validation error',
                    errors: error.errors,
                });
            }
    
            res.status(500).json({
                message: 'Error creating product',
                error: error.message,
            });
        }
    },
     deleteProduct : async (req, res) => {
        try {
            const productId = req.params.id; // Get the product ID from the request parameters
    
            const deletedProduct = await PRODUCTS.findByIdAndDelete(productId); // Delete the product
    
            if (!deletedProduct) {
                return res.status(404).json({
                    message: 'Product not found',
                });
            }
    
            res.status(200).json({
                message: 'Product deleted successfully!',
                product: deletedProduct, // Optionally return the deleted product details
            });
        } catch (error) {
            console.error('Error deleting product:', error); // Log the error
    
            res.status(500).json({
                message: 'Error deleting product',
                error: error.message,
            });
        }
    }
    
    

}