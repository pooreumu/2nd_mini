const mongoose = require("mongoose");
const commentsSchema = mongoose.Schema({
  restaurantTitle: { type: Number, required: true },
  restaurantImg: { type: URL, require: true },
});
module.exports = mongoose.model("Comment", commentsSchema);
