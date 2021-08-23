const ProfileDB = require('../models/profile');

let save = async (body)=>{
    let saveProfile = new ProfileDB(body);
    return await saveProfile.save();
}

module.exports = {
    save
}