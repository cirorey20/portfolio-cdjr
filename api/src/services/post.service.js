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
      return `post ${id} not found`
    }
    return post;
  }

  async create({title, description, repoGitHub, linkVideo, web, images}) {

    let post = await models.Post.create({
      title,
      description,
      repoGitHub,
      linkVideo,
      web,
      images
    });
    return post;
  }

  async update(id, changes) {
    try {
      let post = await models.Post.findByPk(id);
      if (!id) {
        throw new Error('Precise post ID')
      }
      const rta = await post.update(changes);
      return rta;
    } catch (error) {
      console.log(error)
    }
  }

  async delete(id) {
    try {
      let post = await models.Post.findByPk(id);
      await post.destroy();
      return {
        message: `Post ${id} deleted`
      }
    } catch (error) {
      console.log(error)
    }
  }

}

module.exports = PostService;