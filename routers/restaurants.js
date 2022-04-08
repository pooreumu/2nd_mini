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
    const commentDb = await Comment.find({ restaurantTitle }, { _id: false, commentIdx: false });
    res.status(200).json({ commentDb });
});

// #swagger.tags = ["Comment"]
// #swagger.summary = "댓글 관련 API"
// #swagger.description = "댓글 작성 API"
router.post('/:name/comments', async (req, res) => {
    const { name } = req.params
    const { chickenMenu, nickname, comment } = req.body
    let commentIdx = 0
    const existCommentDb = await Comment.find({})
    if (existCommentDb.length === 0) {
        commentIdx = 0
    } else {
        commentIdx = existCommentDb[existCommentDb.length - 1].commentIdx + 1
    }
    await Comment.create({
        restaurantTitle: name,
        chickenMenu,
        commentIdx,
        nickname,
        comment
    })
    res.status(201).json({ success: true, msg: '댓글 작성 완료' })
})

// #swagger.tags = ["Comment"]
// #swagger.summary = "댓글 관련 API"
// #swagger.description = "댓글 수정 API"
router.put('/:name/comments/:commentId', async (req, res) => {
    const commentIdx = req.params.commentId
    const { comment } = req.body
    const existCommentDb = await Comment.find({ commentIdx })
    if (existCommentDb) {
        await Comment.updateOne({ commentIdx }, { $set: { comment } })
        res.status(200).json({ success: true, msg: '수정 완료' })
    } else {
        res.status(401).json({ success: false, msg: '권한이 없습니다.' })
    }
})

// #swagger.tags = ["Comment"]
// #swagger.summary = "댓글 관련 API"
// #swagger.description = "댓글 삭제 API"
router.delete('/:name/comments/:commentId', async (req, res) => {
    const commentIdx = req.params.commentId
    const existCommentDb = await Comment.find({ commentIdx })
    if (existCommentDb) {
        await Comment.deleteOne({ commentIdx })
        res.status(200).json({ success: true, msg: '삭제 완료!' })
    }
})

module.exports = router;
