const sgMail = require('@sendgrid/mail')
const Application = require('../models/Application')

exports.notify_completion = (req, res, next) => {
  Application.findOne({ owner: req.user._id.toString() }).then(doc => {
    const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY

    sgMail.setApiKey(SENDGRID_API_KEY)

    let company = doc.organisation_name

    let mailList = [
      'stephenbuluswayar@gmail.com',
      'kole.audu@gmail.com',
      // 'csraccreditation@gmail.com',
      // 'jennifer@csr-accreditation.co.uk'
    ]
  
    const message = {
      to: mailList,
      from: 'emmanuel@csr-accreditation.co.uk',
      subject: `APPLICATION COMPLETION FROM ${company}`,
      text: `Hello, ${company} just completed their application. Sign in to the accessors portal to view.`
    }
  
    sgMail.send(message).then(() => {
      res.status(200)
    }).catch(() => {
      res.json(err)
    })
  }).catch(() => {
    res.status(404).end()
  })
}