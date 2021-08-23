const UserDB = require('../models/user');

let find = async (filter) => { // {phone:phone}
    return await UserDB.findOne(filter);
}
let patch = async (id, body) => {
    return await UserDB.findByIdAndUpdate(id, body);
}
let save = async (body) => {
    let saveUser = new UserDB(body);
    return await saveUser.save();
}
let detail = async (id) => {
    return await UserDB.findOne({ _id: id }).populate('profile');
}
let drop = async id => {
    return await UserDB.findByIdAndDelete(id);
}

module.exports = {
    find,
    patch,
    save,
    detail,
    drop
}