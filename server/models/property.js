const { Schema, model } = require('mongoose');

const propertySchema = new Schema({
  category: {
    type: Number,
    required: true,
    unique: false,
  },
  category2:{
    type: Number,
    required: true,
    unique: false,
  },
  rooms:{
      type: Number,
  },
  bathrooms:{
      type: Number,
  },
  description: {
    type: String,
    required: true,
    unique: false,
  },
  address:{
      type: String,
  },
  price:{
      type: Number,
  },
  
  img:
  [{
    type: [String],
    required: false,
  }],
  client:
  {
    type: Schema.Types.ObjectId,
    ref: 'Client'
  }
});



const Property = model('Property', propertySchema);

module.exports = Property;
