const mongoose = require('mongoose');
const { Schema } = mongoose;
const ProductSchema = new Schema({
        product_name:{ type: String,  required: true},
        product_extinguisher_type:{ type: String, required: true},
        product_extinguisher_capacity:{ type: String, required: true},
        product_manufactured_date:{ type: Date, default: Date.now},
        product_due_date:{ type: Date, default: Date.now},
        product_remarks:{ type: String, required: true},
        product_client_id:{ type: String,required: true},
        product_consultant_id:{ type: String, required: true}
});
const Product = mongoose.model('product', ProductSchema);
//User.createIndexes();

module.exports = Product;