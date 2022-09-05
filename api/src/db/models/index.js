const { User, UserSchema } = require('./user.model.js');
const { Post, PostSchema } = require('./post.model');
const { Profile, ProfileSchema } = require('./profile.model');

function setupModels(sequelize) {
    User.init(UserSchema, User.config(sequelize));
    Post.init(PostSchema, Post.config(sequelize));
    Profile.init(ProfileSchema, Profile.config(sequelize));
}

module.exports = setupModels;