const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProfileSchema = new mongoose.Schema({
    user: { type: Schema.Types.ObjectId, required: true },
    address: { type: String },
    avatar: { type: String },
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now }
})

const Profile = mongoose.model('profile', ProfileSchema);

module.exports = Profile;