const { Model, DataTypes, Sequelize } = require('sequelize');

const POST_TABLE = 'posts';

const PostSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  repoGitHub: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'repo_github',
    unique: true,
  },
  linkVideo: {
    allowNull: true,
    type: DataTypes.STRING,
    field: 'link_video',
    unique: true,
  },
  web: {
    allowNull: true,
    type: DataTypes.STRING,
    unique: true,
  },
  images: {
    allowNull: true,
    type: DataTypes.JSON
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  }

}

class Post extends Model {
    static associate(models) {
      //associations
      
    }
    static config(sequelize) {
      return {
        sequelize,
        tableName: POST_TABLE,
        modelName: 'Post',
        timestamps: false
      }
    }
  }
  
  module.exports = {
    POST_TABLE,
    PostSchema,
    Post
  }