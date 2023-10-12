const ethers = require('ethers');  
const url = 'http://127.0.0.1:8545/';
const customHttpProvider = new ethers.JsonRpcProvider(url);
const signer = new ethers.Wallet("0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80", customHttpProvider);
const abi = require("../../abi.json");
const contract = new ethers.Contract("0x9A9f2CCfdE556A7E9Ff0848998Aa4a0CFD8863AE", abi, signer);

const crypto = require('crypto');
const fs = require('fs');

const createHash = (filename) => {

    const data = fs.readFileSync(filename);
    const hash = crypto
        .createHash('sha256')
        .update(data)
        .digest('hex');

    return hash;
}

const checkHash = (filename, hash) => {
    const data = fs.readFileSync(filename);
    const calculatedHash = crypto
        .createHash('sha256')
        .update(data)
        .digest('hex');
    return calculatedHash === hash;
}

const getPicture = async(filename) => {
    const hash = createHash(filename);
    const path="";

    const expectedHash = await contract.getHashPicture(0);
    if(checkHash(filename, expectedHash)) {
        console.log('El hash coincide')
    } else {
        console.log('El hash no coincide');
    }
}

const setPicture = async(hash) => {
    const path="";
    let setPicture = await contract.setPicture(hash,path);
    console.log("Documento agregado a la blockchain");
}

module.exports = {
    createHash,
    checkHash,
    getPicture,
    setPicture
  };