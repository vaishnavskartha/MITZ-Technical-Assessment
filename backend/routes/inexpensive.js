const express = require('express');
const { OrderModel } = require('../models/order');
const router = express.Router();

// API endpoint to find customers who have bought inexpensive items

router.get('/api/customers-bought-inexpensive-items', async (req, res) => {
  try {

    const customersBoughtInexpensiveItems = await OrderModel.aggregate([
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
        $unwind: '$product'
      },
      {
        $match: {
          'product.price': { $gte: 1600 },
        },
      },
      {
        $group: {
          _id: '$customer_id',
        },
      },
    ]);

    res.json(customersBoughtInexpensiveItems);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


module.exports = router;