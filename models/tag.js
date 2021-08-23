const mongoose = require('mongoose');

const { Schema } = mongoose;
const TagSchema = new Schema({
    name: { type: String, required: true }
});
const TagDB = mongoose.model('tag', TagSchema);

module.exports = TagDB;