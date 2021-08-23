const Helper = require('../utils/helper');
const CategoryService = require('../services/category');

let save = async (req, res, next) => {
    let result = await CategoryService.save(req.body);
    res.status(200).json(Helper.formatMsg(1, "Succes", result));
}

let get = async(req,res,next) =>{
    let result = await CategoryService.get(req.params.id);
    res.status(200).json(Helper.formatMsg(1,"Category",result));
}

let paginate = async(req,res,next) =>{
    let result = await CategoryService.paginate();
    res.status(200).json(Helper.formatMsg(1,"All Categories",result));
}

let patch = async(req,res,next) =>{
    let result = await CategoryService.patch(req.params.id,req.body);
    res.status(200).json(Helper.formatMsg(1,"Category Updated",result));
}

let drop = async(req,res,next) =>{
    let result = await CategoryService.drop(req.params.id);
    res.status(200).json(Helper.formatMsg(1, "Category Deleted", result));
}

module.exports = {
    save,
    paginate,
    get,
    patch,
    drop
}