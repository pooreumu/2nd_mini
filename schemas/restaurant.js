const mongoose = require("mongoose");
const restaurantSchema = mongoose.Schema({
    restaurantTitle: { type: String, required: true },
    restaurantImg: { type: String, required: true },
});
module.exports = mongoose.model("Restaurant", restaurantSchema);
