const {Sequelize} = require('sequelize');

const setupModels = require('../src/db/models/index');
const {config} = require('../config/config');

const dbUrl = `postgres://${config.dbUser}:${config.dbPassword}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(dbUrl, {
    dialect: 'postgres',
    logging: false,
});

setupModels(sequelize);
sequelize.sync({force:false})

module.exports = sequelize;