const express = require('express');
const router = express.Router();

const UserService = require('../../services/user.services')
const service = new UserService();

router.get('/', async (req,res, next) => {
    try {
        const users = await service.find();
        res.status(200).json(users)
    } catch (error) {
        next(error)
    }
})

router.get('/:id', async (req,res, next) => {
    try {
        let {id} = req.params
        const user = await service.findOne(id);
        
        res.status(200).json(user)
    } catch (error) {
        next(error)
    }
})

router.post('/', async (req,res,next) => {
    
    try {
        const users = await service.find();
        if (users[0]) { //solo crea un solo usuario en la base de datos
            return res.send("not autorization")
        }
        let user = req.body;
        let newUser = await service.create(user)
        res.send({mesaage: newUser});
    } catch (error) {
        next(error);
    }
})

router.patch('/', async (req, res, next) => {

    try {
        const user = await service.find();
        const changes = req.body;
        await user[0].update(changes)
        res.json({
            status: 200,
            mesaage: "Update"            
        })

    } catch (error) {
        next();
    }

})


module.exports = router;