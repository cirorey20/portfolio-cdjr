const {models} = require('../../libs/sequelize');

class PostService {

  constructor() {
  }

  async find() {
    const rta = await models.Post.findAll();
    return rta;
  }

}

module.exports = PostService;