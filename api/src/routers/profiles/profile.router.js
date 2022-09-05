const express = require('express');
const router = express.Router();

const ProfileService = require('../../services/profile.service');
const service = new ProfileService();

router.get('/', async (req,res,next) => {
    try {
        let profile = await service.find();
        res.send(profile)
    } catch (error) {
        next(error)
    }
});

router.post('/', async(req,res,next)=> {
    try {
        let isProfile = await service.find();
        if (isProfile[0]) {
            return res.send('There is already a profile');
        }
        let profile = await service.create();
        res.send(profile);
    } catch (error) {
        next(error)
    }
})

module.exports = router