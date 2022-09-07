// "use strict";
const nodemailer = require("nodemailer");
const { config } = require('./config/config');
// async..await is not allowed in global scope, must use a wrapper
async function sendMail() {
    
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    secure: true, // true for 465, false for other ports
    port: 465,
    auth: {
        user: config.userGoogle,
        pass: config.passGoogle
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: 'cirorey95@gmail.com', // sender address
    to: "boyar209520@gmail.com", // list of receivers
    subject: "Hola Este es un mensaje de Prueba", // Subject line
    text: "Hello world", // plain text body
    html: "<h1>Hello world?</h1>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

// main().catch(console.error);
sendMail();