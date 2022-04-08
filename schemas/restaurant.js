const mongoose = require("mongoose");
const commentsSchema = mongoose.Schema({
  restaurantName: { type: Number, required: true },
  restaurantImage: { type: URL, require: true },
});
module.exports = mongoose.model("Comment", commentsSchema);
