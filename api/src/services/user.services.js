const {models} = require('../../libs/sequelize');

class UserService {

  constructor() {
  }

  async find() {
    const rta = await models.User.findAll();
    return rta;
  }

  async create(body) {
    const rta = await models.User.create(body);
    return rta
  }

}

module.exports = UserService;