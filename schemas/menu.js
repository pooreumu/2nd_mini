const mongoose = require("mongoose");

const menuSchema = mongoose.Schema({
    restaurantTitle: { type: String, required: true },
    menuTitle: { type: String, required: true },
    menuPrice: { type: String, required: true },
});
module.exports = mongoose.model("Menu", menuSchema);
