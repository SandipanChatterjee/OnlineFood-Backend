const mongoose = require("mongoose");

const resturantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter name of the resturant"],
  },
  address: {
    type: String,
    required: [true, "Please enter address"],
  },
  rating: {
    type: Number,
    required: [true, "Please enter rating"],
  },
  eta: {
    type: String,
    required: [true, "Please enter eta"],
  },
  priceForTwo: {
    type: Number,
    required: [true, "please enter price"],
  },
  coupon: String,
  tags: [],
  menu: [],
  resturantImg: String,
});

module.exports = mongoose.model("Resturants", resturantSchema);
