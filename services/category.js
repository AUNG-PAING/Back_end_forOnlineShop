const CategoryDB = require('../models/category');

let save = async (body) => {
    let saveCategory = new CategoryDB(body);
    return await saveCategory.save();
}

let paginate = async () => {
    return await CategoryDB.find();
}

let get = async (id) => {
    return await CategoryDB.findById(id);
}

let patch = async (id, body) => {
    return await CategoryDB.findByIdAndUpdate(id, body);
}
let drop = async (id) => {
    return await CategoryDB.findByIdAndDelete(id);
}

module.exports = {
    save,
    paginate,
    get,
    patch,
    drop
}