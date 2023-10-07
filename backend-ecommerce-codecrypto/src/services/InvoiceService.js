const ethers = require('ethers');  
const url = 'http://127.0.0.1:8545/';
const customHttpProvider = new ethers.JsonRpcProvider(url);
const signer = new ethers.Wallet("0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80", customHttpProvider);
const abi = require("../../abi.json");
const contract = new ethers.Contract("0x9A9f2CCfdE556A7E9Ff0848998Aa4a0CFD8863AE", abi, signer);

const getInvoices = async () => {
  try {
    const result = await contract.getInvoices();
    let invoices = [];
    result.forEach(invoice => {
      invoices.push({
        "id": parseInt(invoice[0]),
        "enterpriseAddress": invoice[1].toString(),
        "customerAddress": invoice[2].toString(),
        "amount": parseInt(invoice[3]),
        "date": invoice[4].toString(),
      });
    });
    return invoices;
  } catch (error) {
    console.log("Error", error);
    throw error;
  }
};

const getInvoiceById = async (id) => {
  try {
    const invoice = await contract.getInvoiceById(id);
    return {
      "id": parseInt(invoice[0]),
      "enterpriseAddress": invoice[1].toString(),
      "customerAddress": invoice[2].toString(),
      "amount": parseInt(invoice[3]),
      "date": invoice[4].toString(),
    };
  } catch (error) {
    console.log("Error", error);
    throw error;
  }
};

const createInvoice = async (enterpriseAddress, customerAddress, amount, date) => {
  try{
    const created = await contract.createInvoice(enterpriseAddress, customerAddress, amount, date );
    return created;
  }catch (error) {
    console.log("Error", error);
    throw error;
  }
}

const deleteInvoiceById = async (id) => {
  try{
    const deleted = await contract.deleteInvoice(id);
    return deleted;
  }catch (error) {
    console.log("Error", error);
    throw error;
  }
}

module.exports = {
  getInvoices,
  getInvoiceById,
  createInvoice,
  deleteInvoiceById
};
