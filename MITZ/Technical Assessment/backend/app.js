const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const product = require('./routes/productData');
const customer_preference = require('./routes/customer_preferenceData');
const order = require('./routes/orderData');
const mostpopular = require('./routes/mostpopular');
const orderall = require('./routes/orderall');
const inexpensive = require('./routes/inexpensive');
dotenv.config();

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use('',product);
app.use('',customer_preference);
app.use('',order);
app.use('',mostpopular);
app.use('',orderall);
app.use('',inexpensive);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on the port ${process.env.PORT}`);
})