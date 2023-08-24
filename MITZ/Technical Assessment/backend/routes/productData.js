const express = require('express');
const { ProductModel } = require('../models/product');
const router=express.Router();

// GET all data

router.get('/api/products', async (req, res) => {
    const data = await ProductModel.find({});
    res.send({ success: data });
});

// POST data

router.post('/api/products', async (req, res) => {
    const product = new ProductModel(req.body);
    const data = await product.save();
    res.send({ success: data });
});
module.exports= router;