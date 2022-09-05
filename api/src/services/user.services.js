const {models} = require('../../libs/sequelize');
const bcrypt = require('bcrypt');
const { use } = require('passport');

class UserService {

  constructor() {
  }

  async find() {
    const rta = await models.User.findAll();
    return rta;
  }

  async findOne(id) {
    const user = await models.User.findByPk(id);
    if (!user) {
      return "Required Id or not finded"
    }
    return user
  }

  async findByEmail(email) {
    const user = await models.User.findOne({
      where: { email }
    });
    return user
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