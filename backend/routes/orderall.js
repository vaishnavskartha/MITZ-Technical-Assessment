const express = require('express');
const { ProductModel } = require('../models/product');
const { OrderModel } = require('../models/order');
const router=express.Router();

// API endpoint to find customers who have ordered all products

router.get('/api/customers-ordered-all-products', async (req, res) => {
    try {
      const productsCount = await ProductModel.countDocuments();
      
      const customersOrderedAllProducts = await OrderModel.aggregate([
        {
          $group: {
            _id: '$customer_id',
            orderedProducts: { $addToSet: '$preference_id' },
          },
        },
        {
          $match: {
            orderedProducts: { $size: productsCount },
          },
        },
      ]);
  
      res.json(customersOrderedAllProducts);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });


  module.exports= router;