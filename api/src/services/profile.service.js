const { models } = require('../../libs/sequelize');

class ProfileService {
    constructor(){

    }
    async find() {
        let profiles = await models.Profile.findAll();
        return profiles;
    }

}

module.exports = ProfileService;