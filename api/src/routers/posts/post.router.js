const express = require('express');
const router = express.Router();

const PostService = require('../../services/post.service')
const service = new PostService();

router.get('/', async (req,res, next) => {
    try {
        const posts = await service.find();
        res.status(200).json(posts)
    } catch (error) {
        next(error)
    }
})

module.exports = router;