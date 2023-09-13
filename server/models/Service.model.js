const { Schema, default: mongoose } = require("mongoose");

const servicesSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title field is required."]
  },
  description: {
    type: String,
    required: [true, "Description field is required."]
  },
  image: {
    type: String,
    required: [true, "Image url field is required."]
  },
  email: {
    type: String,
    required: [true, "User email field is required."]
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Comment'
    }
  ],
  active: {
    type: Boolean,
    default: true
  },
}, { timestamps: true });

const ServicesModel = mongoose.model("service", servicesSchema);

module.exports = ServicesModel
