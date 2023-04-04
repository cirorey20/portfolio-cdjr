const express = require('express');

const usersRouter = require('./users/user.router');
const postsRouter = require('./posts/post.router');
const profileRouter = require('./profiles/profile.router');

const {checkApiKey} = require('../middlewares/auth.handler');
const authRouter = require('./auth/auth.router');
const contactRouter = require('./contact/contact.router');

function routerApi(app) {
    const router = express.Router();
    app.use('/api/v1', router);//ruta de api principal
    router.use('/new-router', checkApiKey, (req,res)=>{
        console.log("TAL COSA")
        res.send('Hola Soy Ciro')
    })
    router.use('/users', usersRouter);
    router.use('/posts', postsRouter);
    router.use('/profile', profileRouter);
    router.use('/auth', authRouter);
    router.use('/contact', contactRouter);

}

module.exports = routerApi;

