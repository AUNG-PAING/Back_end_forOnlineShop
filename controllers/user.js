const Helper = require('../utils/helper');
const UserService = require('../services/user');
const ProfileService = require('../services/profile');
const UuidApikey = require('uuid-apikey');

let saveRegister = async (userType, req, res, next) => {
    req.body.password = Helper.encodePassword(req.body.password);
    let emailUser = await UserService.find({ email: req.body.email });
    if (emailUser) {
        res.status(203).json(Helper.formatMsg(0, "Email is already in Use!"));
        return;
    }
    let phoneUser = await UserService.find({ phone: req.body.phone })
    if (phoneUser) {
        res.status(203).json(Helper.formatMsg(0, "Phone Number is already in Use!"));
        return;
    }
    req.body["role"] = userType;
    const Uuidapi = UuidApikey.create();
    req.body["apiKey"] = Uuidapi.apiKey;
    req.body["secretKey"] = Uuidapi.uuid;
    let result = await UserService.save(req.body);
    let profifleResult = await ProfileService.save({ user: result._id });
    await UserService.patch(result._id, { profile: profifleResult.id });
    let user = result.toObject();
    delete user.password;
    res.status(200).json(Helper.formatMsg(1, "Register Success!", user));
}

let register = async (req, res, next) => {
    saveRegister("User", req, res, next);
}
let add = async (req, res, next) => {
    saveRegister("Admin", req, res, next);
}

let login = async (req, res, next) => {
    let phoneUser = await UserService.find({ phone: req.body.phone });
    if (phoneUser) {
        if (Helper.comparePassword(req.body.password, phoneUser.password)) {
            let user = phoneUser.toObject();
            delete user.password;
            user['token'] = Helper.makeToken(user);
            res.status(200).json(Helper.formatMsg(1, "Login Success", user));
        } else {
            res.status(203).json(Helper.formatMsg(0, "Authentication Error!"));
        }
    } else {
        res.status(203).json(Helper.formatMsg(0, "Authentication Error!"));
    }
}

let detail = async (req, res, next) => {
    let result = await UserService.detail(req.params.id);
    res.status(200).json(Helper.formatMsg(1, "User Detail", result));
}

let drop = async(req,res,next)=>{
    let result = UserService.drop(req.params.id);
    res.status(200).json(Helper.formatMsg(1,"User Deleted",result));
}



module.exports = {
    register,
    login,
    detail,
    add,
    drop
}
