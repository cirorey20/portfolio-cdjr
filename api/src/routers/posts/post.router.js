const express = require('express');
const router = express.Router();
const passport = require('passport');

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

router.get('/:id', async(req,res,next)=> {
    try {
        let {id} = req.params;
        if (id) {
            let post = await service.findOne(id)
            res.json(post);
        }
    } catch (error) {
        next(error)
    }
})

router.post('/', 
    passport.authenticate('jwt', {session:false}),
    async (req, res, next) => {
    try {
        if(!req.body.title || !req.body.description || !req.body.repoGitHub || !req.body.web || !req.body.images) {
            res.send({message: `Fields are missing`})            
        }
        let newPost = await service.create(req.body);
        res.send(newPost)
    } catch (error) {
        next(error)
    }
})

router.patch('/:id',
    async(req,res,next) => {
        try {
            const {id} = req.params;
            const body = req.body;
            const postUpdate = await service.update(id, body)
            res.send(postUpdate);
        } catch (error) {
            next(error);
        }
    }
)

router.delete('/:id',
    async(req,res,next) => {
        try {
            const {id} = req.params
            await service.delete(id);
            res.send(`post ${id} Eliminado`)
        } catch (error) {
            next(error)
        }
    }
)


module.exports = router;