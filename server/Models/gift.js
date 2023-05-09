const mongoose=require("mongoose");
const giftSchema = mongoose.Schema({
    foodName: String,
    image: String,
    desc: String,
    price: Number,
    quantity: {
        type: Number,
        default: 1  // Set the default value for quantity as 1
      }
});

module.exports = GiftModel = mongoose.model("Gifts", giftSchema)