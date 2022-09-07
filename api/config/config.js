require('dotenv').config();

const config = {
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbHost: process.env.DB_HOST,
    dbName: process.env.DB_NAME,
    dbPort: process.env.DB_PORT,
    apiKey: process.env.API_KEY,
    jwtSecret: process.env.JWT_SECRET,
    userGoogle: process.env.USER_MAIL_GOOGLE,
    passGoogle: process.env.PASS_MAIL_GOOGLE,
}
// console.log("hola")
module.exports = {
    config
}