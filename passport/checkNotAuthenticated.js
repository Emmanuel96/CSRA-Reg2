function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect('/company_details')
  }
  next()
}
module.exports = checkNotAuthenticated