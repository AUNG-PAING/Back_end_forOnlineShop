const { object, array } = require('joi');
const mongoose = require('mongoose');
const { Schema } = mongoose;

let CategorySchema = new Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    subs: { type:Array, default:[]},
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now }
});

const Category = mongoose.model('category', CategorySchema);

module.exports = Category;

