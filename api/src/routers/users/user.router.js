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

module.exports = router;