const ethers = require('ethers');  
const url = 'http://127.0.0.1:8545/';
const customHttpProvider = new ethers.JsonRpcProvider(url);
const signer = new ethers.Wallet("0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80", customHttpProvider);
const abi = require("../../abi.json");
const contract = new ethers.Contract("0x4826533B4897376654Bb4d4AD88B7faFD0C98528", abi, signer);

const getArticles = async () => {
  try {
    const result = await contract.getArticles();
    let articles= [];
    result.forEach(article => {
      
      articles.push({
        "id": parseInt(article[0]),
        "address": article[1].toString(),
        "name": article[2].toString(),
        "price": parseInt(article[3])
      });
      
    });
    return articles;
  } catch (error) {
    console.log("Error", error);
    throw error;
  }
};

const getArticleById = async (id) => {
  try {
    const article = await contract.getArticleById(id);
    return {
      "id": parseInt(article[0].id),
      "enterpriseAddress": article[1].toString(),
      "name": article[2].toString(),
      "price": parseInt(article[3])
    };
  } catch (error) {
    console.log("Error", error);
    throw error;
  }
};

const createArticle = async (enterpriseAddress, name, price) => {
  try{
    const created = await contract.createArticle(enterpriseAddress, name, price);
    return created;
  }catch (error) {
    console.log("Error", error);
    throw error;
  }
}

const deleteArticleById = async (id) => {
  try{
    const deleted = await contract.deleteArticle(id);
    return deleted;
  }catch (error) {
    console.log("Error", error);
    throw error;
  }
}

module.exports = {
  getArticles,
  getArticleById,
  createArticle,
  deleteArticleById
  
};
