const { Strategy, ExtractJwt } = require('passport-jwt');

const {config} = require('../../../config/config')

const option = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.jwtSecret
}
console.log(option.secretOrKey, "jwt.strategy.js", option.jwtFromRequest)

const JwtStrategy = new Strategy(option, (payload, done) => {
    console.log(payload, "jwt.strategy.js")
    return done(null, payload);
});

module.exports = JwtStrategy;