const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: { 
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  application: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Application'
  },
  environmentDocs: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'EnvironmentDoc'
  }],
  workplaceDocs: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'WorkplaceDoc'
  }],
  communityDocs: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'CommunityDoc'
  }],
  philanthropyDocs: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'PhilanthropyDoc'
  }]
});

UserSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('User', UserSchema);