const express = require('express');
const { OrderModel } = require('../models/order');
const router=express.Router();

//API endpoint to find the most popular product

router.get('/api/most-popular-product', async (req, res) => {
    try {
      const popularProduct = await OrderModel.aggregate([
        {
          $lookup: {
            from: 'customer_preferences',
            localField: 'preference_id',
            foreignField: 'preference_id',
            as: 'preferences',
          },
        },
        {
          $unwind: '$preferences',
        },
        {
          $lookup: {
            from: 'products',
            localField: 'preferences.product_id',
            foreignField: 'product_id',
            as: 'product',
          },
        },
        {
          $unwind: '$product',
        },
        {
          $group: {
            _id: '$product.product_id',
            productName: { $first: '$product.name' },
            popularity: { $sum: 1 },
          },
        },
        {
          $sort: { popularity: -1 },
        },
        {
          $limit: 1,
        },
      ]);
  
      res.json(popularProduct[0]);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });


  module.exports= router;