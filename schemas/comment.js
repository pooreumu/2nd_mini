const mongoose = require("mongoose");
const commentsSchema = mongoose.Schema({

    restaurantTitle: { type: String, required: true },
    chickenMenu: { type: String, require: true },
    chickenPrice: { type: String, require: true },
    commentIdx: { type: Number, required: true },
    nickname: { type: String, required: true },
    comment: { type: String, required: true },

});
module.exports = mongoose.model("Comment", commentsSchema);