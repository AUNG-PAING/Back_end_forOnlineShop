const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema({
    name: { type: String, required: true },
    images: [{ type: String, required: true }],
    price: { type: Number, required: true },
    desc: { type: String, required: true },
    detail: { type: String, required: true },
    features: { type: Array, required: true },
    tag: { type: Schema.Types.ObjectId, ref: 'tag', required: true },
    category: { type: String, required: true },
    subcat: { type: String, required: true },
    childcat: { type: String, required: true },
    status: { type: Boolean, default: true },
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now }
});

const Product = mongoose.model('product', ProductSchema);

module.exports = Product;