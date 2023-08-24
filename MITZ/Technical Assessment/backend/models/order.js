var Mongoose = require("mongoose");

// Order Schema
const OrderSchema = Mongoose.Schema(
    {
        "customer_id": String,
        "preference_id": String,
        "date": String,
        
    }
);

var OrderModel = Mongoose.model("orders",OrderSchema);
module.exports = {OrderModel};