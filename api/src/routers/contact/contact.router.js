const express = require('express');
const router = express.Router();
const sendMail = require('./sendEmail')


router.post('/',
    async (req,res,next) => {
        try {
            const body = req.body;
            if (!body.subject || !body.message || !body.contact) {
                return res.send("Required fields")
            }
            await sendMail(body.subject, body.message, body.contact);
            res.send("Message send")
        } catch (error) {
            next(error)
        }
    }
)

module.exports = router