const express = require('express');

const usersRouter = require('./users/user.router');
const postsRouter = require('./posts/post.router');

function routerApi(app) {
    const router = express.Router();
    app.use('/api/v1', router);//ruta de api principal
    router.use('/users', usersRouter);
    router.use('/posts', postsRouter);
}

module.exports = routerApi;

