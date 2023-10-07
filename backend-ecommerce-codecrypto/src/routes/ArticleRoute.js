const express = require("express");
const router = express.Router();
const ArticleController = require("../controllers/ArticleController");

router.get("/", ArticleController.getArticles);
router.get("/:id", ArticleController.getArticleById);
router.post("/",ArticleController.createArticle);
router.delete("/:id", ArticleController.deleteArticleById);

module.exports = router;
