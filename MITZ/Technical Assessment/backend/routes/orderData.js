const express = require('express');
const { OrderModel } = require('../models/order');
const router=express.Router();

// GET all data

router.get('/api/orders', async (req, res) => {
    const data = await OrderModel.find({});
    res.send({ success: data });
});

//POST data

router.post('/api/orders', async (req, res) => {
    const order = new OrderModel(req.body);
    const data = await order.save();
    res.send({ success: data });
});
module.exports= router;