const mongoose = require("mongoose");

// Schema
const Schema = mongoose.Schema;
const adega25Schema = new Schema({
  products: {
    dishes: {
      of_the_day: {
        soup: {
          active: Boolean,
          name: String,
          value: String,
        },
        date: {
          type: String,
          default: Date.now(),
        },
      },
    },
  },
});

// Model
const adega25 = mongoose.model("adega25", adega25Schema);

module.exports = adega25;
