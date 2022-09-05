const { models } = require('../../libs/sequelize');

class ProfileService {
    constructor(){
    }
    async find() {
        let profiles = await models.Profile.findAll();
        return profiles;
    }
    async create() {
        
         let profile = await models.Profile.create()
         return profile;
    }

}

module.exports = ProfileService;