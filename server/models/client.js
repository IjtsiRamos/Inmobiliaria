const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const clientSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: false,
    unique: false,
  },
  user: 
    {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
});



const Client = model('Client', clientSchema);

module.exports = Client;
