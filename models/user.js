const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    password: { type: String, required: true },
    profile: { type: Schema.Types.ObjectId, ref: 'profile' },
    role: { type: String, required: true },
    apiKey: { type: String, required: true },
    secretKey: { type: String, required: true },
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now }
});

const User = mongoose.model('user', UserSchema);
module.exports = User;