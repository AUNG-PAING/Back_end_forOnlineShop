const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

let getToken = (req) => {
    if (req.headers.authorization == undefined) throw new Error("Tokenization Error!");
    let token = req.headers.authorization.split(" ")[1];
    if (token) return token;
    else throw new Error("Tokenization Error!");
}

let formatMsg = (con, msg, result) => {
    if (con == 1) con = true;
    else con = false;
    return {
        con: con,
        msg: msg,
        result: result
    }
}

let getUserFromToken = (req) => {
    let token = getToken(req);
    let user = jwt.verify(token, process.env.SECRET_KEY);
    return user;
}
module.exports = {
    formatMsg,
    getUserFromToken,
    encodePassword: (password) => bcrypt.hashSync(password, 10),
    comparePassword: (plain, hashPassword) => bcrypt.compareSync(plain, hashPassword),
    makeToken: (payload) => jwt.sign(payload, process.env.SECRET_KEY)
}