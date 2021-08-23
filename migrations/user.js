const Helper = require('../utils/helper');
const UserService = require('../services/user');
const ProfileService = require('../services/profile');
const UuidApikey = require('uuid-apikey');

let migrate = async () => {
    let uuidapi = UuidApikey.create();
    let user = {
        "name": "owner",
        "email": "owner@gmail.com",
        "phone": "09300300300",
        "password": "@123!Abc",
        "role": "Owner",
        "apiKey": uuidapi.apiKey,
        "secretKey": uuidapi.uuid

    };
    console.log(user);
    user.password = Helper.encodePassword(user.password);
    let userResult = await UserService.save(user);
    let profileResult = await ProfileService.save({ user: userResult._id });
    console.log(profileResult);
    console.log(userResult);
    await UserService.patch(userResult._id, { profile: profileResult._id });
    console.log("Current Save User", { user: userResult, profile: profileResult });
}

module.exports = {
    migrate
}