const mongoose = require('mongoose');

const ScoreSchema = new mongoose.Schema({
  application: {
    type: String,
    ref: 'Application'
  },

  csr_benefit_score: {
    type: Number
  },

  environmental_benefit_score: {
    type: Number
  },

  social_benefit_score: {
    type: Number
  },

  staff_benefit_score: {
    type: Number
  },

  workplace_benefit_score: {
    type: Number
  },

  charitable_benefit_score: {
    type: Number
  },

  financial_benefit_score: {
    type: Number
  },

  commitment_score: {
    type: Number
  },

  evidence_score: {
    type: Number
  },

  degree_of_originality_score: {
    type: Number
  },

  future_expansion_score: {
    type: Number
  },

  replicability_score: {
    type: Number
  },

  special_merit_score: {
    type: Number
  },

  comment: {
    type: String
  }
});

ScoreSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Score', ScoreSchema);