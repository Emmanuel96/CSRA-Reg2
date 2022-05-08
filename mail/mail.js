let nodemailer = require("nodemailer");
let mail_medium = process.env.MAILER; 
const nodemailerSendgrid = require('nodemailer-sendgrid');
const transporter = nodemailer.createTransport(nodemailerSendgrid({
  apiKey: process.env.SENDGRID_API_KEY,
}));

var message = {
  from: "procauseorg@gmail.com",
};

const sendMail = (html, subject, to_email) => {
  if(mail_medium === 'NONE'){
    console.log('No email sent')
    return;
  }
  message.subject = subject
  message.html = html
  message.to = to_email

  transporter.sendMail(message, (err, info) => {
      console.log(err);
      // console.log(info.messageId);
    });
}

module.exports = {
    sendMail
}