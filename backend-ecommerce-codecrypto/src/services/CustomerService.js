const ethers = require('ethers');  
const url = 'http://127.0.0.1:8545/';
const customHttpProvider = new ethers.JsonRpcProvider(url);
const signer = new ethers.Wallet("0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80", customHttpProvider);
const abi = require("../../abi.json");
const contract = new ethers.Contract("0x4826533B4897376654Bb4d4AD88B7faFD0C98528", abi, signer);

const getCustomers = async () => {
  try {
    const result = await contract.getCustomers();
    let customers= [];
    result.forEach(customer => {
      
      customers.push({
        "id": parseInt(customer[0]),
        "customerAddress": customer[1].toString(),
        "name": customer[2].toString(),
      });
      
    });
    return customers;
  } catch (error) {
    console.log("Error", error);
    throw error;
  }
};

const getCustomerById = async (id) => {
  try {
    const customer = await contract.getCustomerById(id);
    return {
      "id": parseInt(customer[0]),
      "addressCustomer": customer[1].toString(),
      "name": customer[2].toString(),
    };
  } catch (error) {
    console.log("Error", error);
    throw error;
  }
};

const createCustomer = async (customerAddress, name) => {
  try{
    const created = await contract.createCustomer(customerAddress, name);
    return created;
  }catch (error) {
    console.log("Error", error);
    throw error;
  }
}

const deleteCustomerById = async (id) => {
  try{
    const deleted = await contract.deleteCustomer(id);
    return deleted;
  }catch (error) {
    console.log("Error", error);
    throw error;
  }
}

module.exports = {
  getCustomers,
  getCustomerById,
  createCustomer,
  deleteCustomerById
};
