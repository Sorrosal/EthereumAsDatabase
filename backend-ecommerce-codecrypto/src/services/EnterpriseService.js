const ethers = require('ethers');  
const url = 'http://127.0.0.1:8545/';
const customHttpProvider = new ethers.JsonRpcProvider(url);
const signer = new ethers.Wallet("0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80", customHttpProvider);
const abi = require("../../abi.json");
const contract = new ethers.Contract("0x9A9f2CCfdE556A7E9Ff0848998Aa4a0CFD8863AE", abi, signer);

const getEnterprises = async () => {
  try {
    const result = await contract.getEnterprises();
    console.log(result);
    let enterprises= [];
    result.forEach(enterprise => {
      
      enterprises.push({
        "id": parseInt(enterprise[0]),
        "enterpriseAddress": enterprise[1].toString(),
        "name": enterprise[2].toString(),
      });
      
    });
    return enterprises;
  } catch (error) {
    console.log("Error", error);
    throw error;
  }
};

const getEnterpriseById = async (id) => {
  try {
    const enterprise = await contract.getEnterpriseById(id);
    return {
      "id": parseInt(enterprise[0].id),
      "addressEnterprise": enterprise[1].toString(),
      "name": enterprise[2].toString(),
    };
  } catch (error) {
    console.log("Error", error);
    throw error;
  }
};

const createEnterprise = async (enterpriseAddress, name) => {
  try{
    const created = await contract.createEnterprise(enterpriseAddress, name);
    return created;
  }catch (error) {
    console.log("Error", error);
    throw error;
  }
}

const deleteEnterpriseById = async (id) => {
  try{
    const deleted = await contract.deleteEnterprise(id);
    return deleted;
  }catch (error) {
    console.log("Error", error);
    throw error;
  }
}

module.exports = {
  getEnterprises,
  getEnterpriseById,
  createEnterprise,
  deleteEnterpriseById
};
