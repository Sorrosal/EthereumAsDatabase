const hre = require("hardhat");
const { JsonRpcProvider } = require('ethers');
const contractAddress = "0x0DCd1Bf9A1b36cE34237eEaFef220932846BCD82";

async function main(){

    const provider = new JsonRpcProvider("http://127.0.0.1:8545/");
    const signer = await provider.getSigner();

    const eCommerceCodeCrypto = await hre.ethers.getContractAt("ECommerceCodeCrypto", contractAddress, signer);

    await eCommerceCodeCrypto.createEnterprise('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266','Enterprise1');
    await eCommerceCodeCrypto.createEnterprise('0x70997970C51812dc3A010C7d01b50e0d17dc79C8','Enterprise2');

    await eCommerceCodeCrypto.createCustomer('0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC','Customer1');
    await eCommerceCodeCrypto.createCustomer('0x90F79bf6EB2c4f870365E785982E1f101E93b906','Customer2');

    await eCommerceCodeCrypto.createArticle('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266','Article1',8,'picture1.jpg');
    await eCommerceCodeCrypto.createArticle('0x70997970C51812dc3A010C7d01b50e0d17dc79C8','Article2',12,'picture2.jpg');

    await eCommerceCodeCrypto.createInvoice('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266','0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC',26,'2023-10-04');
    await eCommerceCodeCrypto.createInvoice('0x70997970C51812dc3A010C7d01b50e0d17dc79C8','0x90F79bf6EB2c4f870365E785982E1f101E93b906',345, '2023-10-04');


    const contadores = {
        enterprises: await eCommerceCodeCrypto.getEnterprises(),
        customers: await eCommerceCodeCrypto.getCustomers(),
        articles: await eCommerceCodeCrypto.getArticles(),
        invoices: await eCommerceCodeCrypto.getInvoices()
    }

    return console.log(contadores);
}

main()