const mongoose = require("mongoose")

const notesSchema = mongoose.Schema({
    foodName: String,
    image: String,
    desc: String,
    price: Number,
    quantity: {
        type: Number,
        default: 1  // Set the default value for quantity as 1
      }
});


module.exports = ImageModel = mongoose.model("Image", notesSchema)