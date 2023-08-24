var Mongoose = require("mongoose");

// Customer_preference Schema
const Customer_preferenceSchema = Mongoose.Schema(
    {
        "preference_id": String,
        "product_id": String,   
               
    }
);

var Customer_preferenceModel = Mongoose.model("customer_preferences",Customer_preferenceSchema);
module.exports = {Customer_preferenceModel};