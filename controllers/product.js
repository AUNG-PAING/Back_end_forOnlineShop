const Helper = require('../utils/helper');
const ProductService = require('../services/product');

let save = async (req, res, next) => {
    let result = await ProductService.save(req.body);
    res.status(200).json(Helper.formatMsg(1, "Save Success",result));
}

let paginate = async(req,res,next)=>{
    let result = await ProductService.paginate(req.params.skip);
    res.status(200).json(Helper.formatMsg(1,"Paginated Product",result));
}
let get = async(req,res,next)=>{
    let result  = await ProductService.get(req.params.id);
    res.status(200).json(Helper.formatMsg(1,"Single Product",result));
}

module.exports = {
    save,
    paginate,
    get
}