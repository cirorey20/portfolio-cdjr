const { Model, DataTypes, Sequelize } = require('sequelize');

const PROFILE_TABLE = 'profiles';

const ProfileSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER
  },
  headline: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: 'FullStackDevelper'
  },
  about: {
    allowNull: false,
    type: DataTypes.TEXT,
    defaultValue: 'About'
  },
  experience: {
    allowNull: false,
    type: DataTypes.TEXT,
    defaultValue: 'Experience'
  },
  skillstech: {
    allowNull: true,
    type: DataTypes.JSON,
    defaultValue: [
      {
        name: "PHP",
        img: "https://dusandev.netlify.app/assets/img/php.png",
        level: "Intermedio"
      },
      {
        name: "Javascript",
        img: "https://dusandev.netlify.app/assets/img/js.png",
        level: "Intermedio"
      },
      {
        name: "NodeJs",
        img: "https://dusandev.netlify.app/assets/img/nodejs.png",
        level: "Intermedio"
      }
    ]
  },
  skillsnotech: {
    allowNull: true,
    type: DataTypes.JSON,
    defaultValue: ['Comunication', 'Lider']
  },
  age: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: 'age'
  },
  img: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: 'https://avatars.githubusercontent.com/u/74796071?v=4'
  },
  github: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: 'myGitHub.com'
  },
  linkedin: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: 'myLinkdedin.com'
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: 'myemail@gmail.com'
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  }

}

class Profile extends Model {
    static associate(models) {
      //associations
      
    }
    static config(sequelize) {
      return {
        sequelize,
        tableName: PROFILE_TABLE,
        modelName: 'Profile',
        timestamps: false
      }
    }
  }
  
  module.exports = {
    PROFILE_TABLE,
    ProfileSchema,
    Profile
  }