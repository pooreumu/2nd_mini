const mongoose = require("mongoose");
const commentsSchema = mongoose.Schema({
  restaurantName: { type: Number, required: true },
  chickenMenu: { type: String, require: true },
  commentIdx: { type: Number, required: true },
  username: { type: String, required: true },
  comment: { type: String, required: true },
});
module.exports = mongoose.model("Comment", commentsSchema);
