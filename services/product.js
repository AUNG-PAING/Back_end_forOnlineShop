const ProductDB = require('../models/product');

let save = async (body) => {
    let saveProduct = new ProductDB(body);
    return await saveProduct.save();
}
let paginate = async(skip) =>{
    let products =  await ProductDB.find().skip(Number(skip)).limit(Number(process.env.LIMIT)).populate('tag');
    let productCounts = await ProductDB.countDocuments();
    return {products:products,count:productCounts};
}
let get = async(id)=>{
    return await ProductDB.findById(id).populate('tag')
}

module.exports = {
    save,
    paginate,
    get
}