const router = require("express").Router();
const authMiddleware = require("../middlewares/auth-middleware");
const Restaurants = require("../schemas/restaurant");
const Comment = require("../schemas/comment");

module.exports = router;
