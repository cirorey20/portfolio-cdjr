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
})

module.exports = router