const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

// Set S3 endpoint to DigitalOcean Spaces
const spacesEndpoint = new aws.Endpoint('nyc3.digitaloceanspaces.com');
const s3 = new aws.S3({
  endpoint: spacesEndpoint
});

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'csra',
    acl: 'public-read',
    key: function (request, file, cb) {
      console.log(file);
      cb(null, file.originalname);
    }
  })
}).array('upload', 5);

exports.upload_media = (request, response, next) => {
  upload(request, response, function (error) {
    if (error) {
      console.log(error);
      return response.status(400).json({
        success: false,
        message: "Failed to upload files",
      })
    }
    console.log('Successfully uploaded files');
    response.status(200).json({
      success: true,
      message: "Successfully uploaded files",
    })
  });
}