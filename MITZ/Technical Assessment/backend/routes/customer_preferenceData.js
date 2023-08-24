const express = require('express');
const { Customer_preferenceModel } = require('../models/customer_preference');
const router=express.Router();

// GET all data

router.get('/api/customer_preference', async (req, res) => {
    const data = await Customer_preferenceModel.find({});
    res.send({ success: data });
});

//POST data

router.post('/api/customer_preference', async (req, res) => {
    const customer_preference = new Customer_preferenceModel(req.body);
    const data = await customer_preference.save();
    res.send({ success: data });
});
module.exports= router;