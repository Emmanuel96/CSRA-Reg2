const sgMail = require('@sendgrid/mail')
const Application = require('../models/Application')

exports.notify_completion = (req, res, next) => {
  Application.findOne({ owner: req.user._id.toString() }).then(doc => {
    const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY

    sgMail.setApiKey(SENDGRID_API_KEY)

    let company = doc.organisation_name

    console.log(req.user)
    let mailList = [
      'kole.audu@gmail.com',
      'csraccreditation@gmail.com',
      'jennifer@csr-accreditation.co.uk'
    ]
  
    const adminNotificationMessage = {
      to: mailList,
      from: 'emmanuel@csr-accreditation.co.uk',
      subject: `APPLICATION COMPLETION FROM ${company}`,
      text: `Hello, ${company} just completed their application. Sign in to the accessors portal to view.`
    }

    const companyNotificationMessage = {
      to: req.user.email,
      from: 'emmanuel@csr-accreditation.co.uk',
      subject: `APPLICATION COMPLETED`,
      text: `Hello, ${req.user.firstName}, you have successfully completed your CSRA application. Our team will review your application and we will be in touch. Have a great day!`
    }
  
    sgMail.send(companyNotificationMessage)
    sgMail.send(adminNotificationMessage).then(() => {
      res.status(200)
    }).catch(() => {
      res.json(err)
    })
  }).catch(() => {
    res.status(404).end()
  })
}