const mongoose = require("mongoose");

const RestorentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    resImage: {
      type: String,
    },
    products: [
      {
        pid: {
          type: String,
        },
      },
    ],
    categories: [String],
  },

  { timestamps: true }
);

module.exports = mongoose.model("Restorents", RestorentSchema);
