const TagDB = require('../models/tag');

let save = async (body) => {
    return await new TagDB(body).save();
}

let all = async () => {
    return await TagDB.find();
}

let get = async (id) => {
    return await TagDB.findOne({ _id: id });
}
let patch = async (id, body) => {
    return await TagDB.findByIdAndUpdate(id, body)
}

let drop = async (id) => {
    return await TagDB.findByIdAndDelete(id)
}

module.exports = {
    save,
    all,
    get,
    patch,
    drop
}