const express = require('express');
const router = express.Router();
const UploadController = require('../controllers/UploadController')

//POST route

router.post('/api/upload/media', UploadController.upload_media);

module.exports = router