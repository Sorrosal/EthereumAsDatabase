const hre = require("hardhat");
const { JsonRpcProvider } = require('ethers');

async function main() {

  const provider = new JsonRpcProvider("http://127.0.0.1:8545/");
  const signer = await provider.getSigner();
  const eCommerceCodeCrypto = await hre.ethers.deployContract("ECommerceCodeCrypto");

  await eCommerceCodeCrypto.waitForDeployment();
  
  console.log(
    `Contract deployed --> address  ${eCommerceCodeCrypto.target} \n`
   );

    const eCommerceCodeCryptoContract = await hre.ethers.getContractAt("ECommerceCodeCrypto", eCommerceCodeCrypto.target, signer);

    await eCommerceCodeCryptoContract.createEnterprise('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266','Enterprise1');
    await eCommerceCodeCryptoContract.createEnterprise('0x70997970C51812dc3A010C7d01b50e0d17dc79C8','Enterprise2');

    await eCommerceCodeCryptoContract.createCustomer('0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC','Customer1');
    await eCommerceCodeCryptoContract.createCustomer('0x90F79bf6EB2c4f870365E785982E1f101E93b906','Customer2');

    await eCommerceCodeCryptoContract.createArticle('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266','Article1',8);
    await eCommerceCodeCryptoContract.createArticle('0x70997970C51812dc3A010C7d01b50e0d17dc79C8','Article2',12);

    await eCommerceCodeCryptoContract.createInvoice('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266','0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC',26,'2023-10-04');
    await eCommerceCodeCryptoContract.createInvoice('0x70997970C51812dc3A010C7d01b50e0d17dc79C8','0x90F79bf6EB2c4f870365E785982E1f101E93b906',345, '2023-10-04');
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
