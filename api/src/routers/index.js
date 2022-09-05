const express = require('express');

const usersRouter = require('./users/user.router');
const postsRouter = require('./posts/post.router');
const profileRouter = require('./profiles/profile.router');
const {checkApiKey} = require('../middlewares/auth.handler');

function routerApi(app) {
    const router = express.Router();
    app.use('/api/v1', router);//ruta de api principal
    router.use('/new-router', checkApiKey, (req,res)=>{
        res.send('Hola Soy Ciro')
    })
    router.use('/users', usersRouter);
    router.use('/posts', postsRouter);
    router.use('/profile', profileRouter);
}

module.exports = routerApi;

