const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: {type: String, required:true},
    price: {type: Number, required:true},
    description: {type: String, required:true},
    UserId: {type: Schema.Types.ObjectId, ref:'user'}
});
module.exports = mongoose.model("product",ProductSchema);