const {models} = require('../../libs/sequelize');
const bcrypt = require('bcrypt')

class UserService {

  constructor() {
  }

  async find() {
    const rta = await models.User.findAll();
    return rta;
  }

  async create(body) {
    console.log(body)
    let hash = await bcrypt.hash(body.password, 10);
    let user = await models.User.create({
      name: body.name,
      lastName: body.lastName,
      email: body.email,
      password: hash,
      role: body.role
    })
    delete user.dataValues.password
    return user
  }

}

module.exports = UserService;