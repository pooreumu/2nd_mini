const router = require("express").Router();
const authMiddleware = require("../middlewares/auth-middleware");
const Restaurant = require("../schemas/restaurant");
const Comment = require("../schemas/comment");

router.get("/", async (req, res) => {
    const restaurants = await Restaurant.find();
    res.send({ restaurants });
});

router.get("/:name", async (req, res) => {
    const restaurantTitle = req.params.name;
    const { chickenMenu, chickenPrice, nickname, comment } = await Comment.findOne({ restaurantTitle });
    res.send({ chickenMenu, chickenPrice, nickname, comment });
});

module.exports = router;
