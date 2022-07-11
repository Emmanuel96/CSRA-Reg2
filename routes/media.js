const express = require('express');
const router = express.Router();
const MediaController = require('../controllers/MediaController')

//Post routes
router.post('/api/media/upload/environment', MediaController.media_upload_environment);

router.post('/api/media/upload/workplace', MediaController.media_upload_workplace);

router.post('/api/media/upload/community', MediaController.media_upload_community);

router.post('/api/media/upload/philanthropy', MediaController.media_upload_philanthropy);

// Get routes
router.get('/api/media/fetch', MediaController.fetch_media);

//Delete routes
// router.post('/api/media/delete', MediaController.delete_media);

module.exports = router