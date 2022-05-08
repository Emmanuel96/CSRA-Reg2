const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
const {ListObjectsCommand, DeleteObjectCommand} = require("@aws-sdk/client-s3");
const s3Client  = require("../utils/s3Client");

const EnvironmentDoc = require("../models/EnvironmentDoc")
const WorkplaceDoc = require("../models/WorkplaceDoc")
const CommunityDoc = require("../models/CommunityDoc")
const PhilanthropyDoc = require("../models/PhilanthropyDoc")

// Set S3 endpoint to DigitalOcean Spaces
const spacesEndpoint = new aws.Endpoint('nyc3.digitaloceanspaces.com');
const s3 = new aws.S3({
  endpoint: spacesEndpoint
});

exports.media_upload_environment = async (request, response, next) => {
  const upload = multer({
    storage: multerS3({
      s3: s3,
      acl: 'public-read',
      key: async function (request, file, cb) {
        const fileName = `${request.user._id.toString()}-environment-${file.originalname}` 
    
        console.log(file);
  
        cb(null, fileName)
  
        console.log('csra' + '/users/' + `${request.user._id.toString()}` + '/environment-docs')
  
        const environmentDoc = new EnvironmentDoc({
          fileName,
          owner: request.user._id.toString()
        })
  
        await environmentDoc.save()
      },
      bucket: 'csra' + '/users/' + `${request.user._id.toString()}` + '/environment-docs',
    })
  }).array('upload', 6);

  upload(request, response, function (error) {
    if (error) {
      console.log(error);
      return response.status(400).json({
        success: false,
        message: "Failed to upload environment file(s)",
      })
    }
    console.log('Successfully uploaded environment file(s)');
    response.status(200).json({
      success: true,
      message: "Successfully uploaded environment file(s)",
    })
  });
}

exports.media_upload_workplace = async (request, response, next) => {
  const upload = multer({
    storage: multerS3({
      s3: s3,
      acl: 'public-read',
      key: async function (request, file, cb) {
        const fileName = `${request.user._id.toString()}-workplace-${file.originalname}` 
    
        console.log(file);
  
        cb(null, fileName)
  
        console.log('csra' + '/users/' + `${request.user._id.toString()}` + '/workplace-docs')
  
        const workplaceDoc = new WorkplaceDoc({
          fileName,
          owner: request.user._id.toString()
        })
  
        await workplaceDoc.save()
      },
      bucket: 'csra' + '/users/' + `${request.user._id.toString()}` + '/workplace-docs',
    })
  }).array('upload', 6);

  upload(request, response, function (error) {
    if (error) {
      console.log(error);
      return response.status(400).json({
        success: false,
        message: "Failed to upload workplace file(s)",
      })
    }
    console.log('Successfully uploaded workplace file(s)');
    response.status(200).json({
      success: true,
      message: "Successfully uploaded workplace file(s)",
    })
  });
}

exports.media_upload_community = async (request, response, next) => {
  const upload = multer({
    storage: multerS3({
      s3: s3,
      acl: 'public-read',
      key: async function (request, file, cb) {
        const fileName = `${request.user._id.toString()}-community-${file.originalname}` 
    
        console.log(file);
  
        cb(null, fileName)
  
        console.log('csra' + '/users/' + `${request.user._id.toString()}` + '/community-docs')
  
        const communityDoc = new CommunityDoc({
          fileName,
          owner: request.user._id.toString()
        })
  
        await communityDoc.save()
      },
      bucket: 'csra' + '/users/' + `${request.user._id.toString()}` + '/community-docs',
    })
  }).array('upload', 6);

  upload(request, response, function (error) {
    if (error) {
      console.log(error);
      return response.status(400).json({
        success: false,
        message: "Failed to upload community file(s)",
      })
    }
    console.log('Successfully uploaded community file(s)');
    response.status(200).json({
      success: true,
      message: "Successfully uploaded community file(s)",
    })
  });
}

exports.media_upload_philanthropy = async (request, response, next) => {
  const upload = multer({
    storage: multerS3({
      s3: s3,
      acl: 'public-read',
      key: async function (request, file, cb) {
        const fileName = `${request.user._id.toString()}-philanthropy-${file.originalname}` 
    
        console.log(file);
  
        cb(null, fileName)
  
        console.log('csra' + '/users/' + `${request.user._id.toString()}` + '/philanthropy-docs')
  
        const philanthropyDoc = new PhilanthropyDoc({
          fileName,
          owner: request.user._id.toString()
        })
  
        await philanthropyDoc.save()
      },
      bucket: 'csra' + '/users/' + `${request.user._id.toString()}` + '/philanthropy-docs',
    })
  }).array('upload', 6);

  upload(request, response, function (error) {
    if (error) {
      console.log(error);
      return response.status(400).json({
        success: false,
        message: "Failed to upload philanthropy file(s)",
      })
    }
    console.log('Successfully uploaded philanthropy file(s)');
    response.status(200).json({
      success: true,
      message: "Successfully uploaded philanthropy file(s)",
    })
  });
}






exports.fetch_media = async (request, response, next) => {
  const bucketParams = { 
    Bucket: 'csra',
    Prefix: 'users/' + `${request.user._id.toString()}`
  };

  try {
    const data = await s3Client.send(new ListObjectsCommand(bucketParams));

    console.log("Success", data);

    return response.status(200).json(data.Contents);

  } catch (err) {

    console.log("Error", err);

    response.status(404).end()
  }
}

exports.delete_media = async (request, response, next) => {
  const bucketParams = {
    Bucket: "csra", 
    Key: 'users/' + `${request.user._id.toString()}` + `/${request.body.fileName}` 
  };

  console.log('users/' + `${request.user._id.toString()}` + `/${request.body.fileName}`)

  try {
    const data = await s3Client.send(new DeleteObjectCommand(bucketParams));

    console.log("Success", data);

    return response.status(200).json(data);

  } catch (err) {

    console.log("Error", err);
  }
}