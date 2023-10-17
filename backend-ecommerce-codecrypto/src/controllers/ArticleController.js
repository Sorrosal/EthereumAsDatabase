
const ArticleService = require("../services/ArticleService");

const createArticle = async (req, res) => {
  try{
    const {enterpriseAddress, name, price} = req.body;
    let created;
    if(enterpriseAddress && name && price) {
      created = await ArticleService.createArticle(enterpriseAddress,name, price);
    }

    return res.status(200).send({
      created
    });

  } catch(error) {
    return res.status(500).json({ message: error });
  }
}

const deleteArticleById = async (req, res) => {
  try{
    const {id} = req.params;
    let deleted;
    if(id) {
      deleted = await ArticleService.deleteArticleById(id);
    }

    return res.status(200).send({
      deleted
    });

  } catch(error) {
    return res.status(500).json({ message: error });
  }
}

const getArticleById = async (req, res) => {
  try {
    const {id} = req.params;
    let article;
    if(id) {
       article = await ArticleService.getArticleById(req.params.id);
    }

    return res.status(200).send({
      message: "Mensaje enviado desde: controllers/articleController.js",
      article: article,
    });

  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

const getArticles = async (req, res) => {
  try {
    const articles = await ArticleService.getArticles();
    
    return res.status(200).send({
      message: "Mensaje enviado desde: controllers/ArticleController.js",
      articles: articles,
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getArticles,
  getArticleById,
  deleteArticleById,
  createArticle
};
