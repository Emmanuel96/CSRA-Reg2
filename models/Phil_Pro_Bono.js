const mongoose = require('mongoose')

const Phil_Pro_Bono_Schema = new mongoose.Schema({
  phil_pro_bono: {
    type: String
  },

  phil_pro_bono_completed: Boolean
})

module.exports = mongoose.model('Phil_Pro_Bono', Phil_Pro_Bono_Schema)