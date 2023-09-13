const nodemailer = require("nodemailer");
const createResponse = require("./createResponse");

function sendMail(req, res, next) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD
    }
  });

  const mailOptions = {
    from: process.env.EMAIL,
    to: 'mehedihasannabil49@gmail.com', // friend email
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      res.status(500).json(createResponse(false, "Email is not send"))
      next(error);
    } else {
      console.log('Email sent: ' + info.response);
      console.log(info)
      res.status(201).json(createResponse(true, info))
    }
  });
}

module.exports = sendMail
