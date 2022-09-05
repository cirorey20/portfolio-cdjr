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
    async update(changes) {
        let profile = await this.find()
        let changeProfile = await profile[0].update(changes);
        return changeProfile;
    }

}

module.exports = ProfileService;