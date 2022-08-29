const {models} = require('../../libs/sequelize');

class PostService {

  constructor() {
  }

  async find() {
    let rta = await models.Post.findAll();
    return rta;
  }

  async findOne(id) {
    let post = await models.Post.findByPk(id);
    if(!post) {
      return "post not found"
    }
    return post;
  }

  async create({title, description, web, images}) {

    let post = await models.Post.create({
      title,
      description,
      web,
      images
    });
    return post;

  }

}

module.exports = PostService;