const sgMail = require('@sendgrid/mail')

exports.notify_completion = (req, res, next) => {
  const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY
  sgMail.setApiKey(SENDGRID_API_KEY)

  let USER = req.user.email

  let mailList = [
    'stephenbuluswayar@gmail.com',
    // 'csraccreditation@gmail.com',
    // 'jennifer@csr-accreditation.co.uk'
  ]

  const message = {
    to: mailList,
    from: 'emmanuel@csr-accreditation.co.uk',
    subject: `APPLICATION COMPLETION FROM ${USER}`,
    text: 'Hello, this is a test email, do not reply.'
  }

  sgMail.send(message).then((mail) => {
    console.log("Email sent!")
    res.status(200)
  }).catch(err => {
    console.log(err)
    res.json(err)
  })
}