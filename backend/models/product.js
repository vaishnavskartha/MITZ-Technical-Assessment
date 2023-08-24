var Mongoose = require("mongoose");

//  Product Schema
const ProductSchema = Mongoose.Schema(
    {
        "product_id": String,
        "name": String,
        "price": String,
        
    }
);

var ProductModel = Mongoose.model("products",ProductSchema);
module.exports = {ProductModel};