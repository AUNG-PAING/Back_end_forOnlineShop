const TagService = require('../services/tag');

let save = async (req, res, next) => {
    let result = await TagService.save(req.body)
    res.json(result);
}
let all = async (req, res, next) => {
    let result = await TagService.all();
    res.json(result);
}
let get = async (req, res, next) => {
    let result = await TagService.get(req.params.id);
    res.json(result);
}
let patch = async (req, res, next) => {
    let result = await TagService.patch(req.params.id, req.body);
    res.json(result)
}
let drop = async (req, res, next) => {
    let result = await TagService.drop(req.params.id);
    res.json(result);
}
module.exports = {
    save,
    all,
    get,
    patch,
    drop
}