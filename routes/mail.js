const express = require('express');
const router = express.Router();
const MailController = require('../controllers/MailController')

router.post('/api/application/completed', MailController.notify_completion);

module.exports = router;