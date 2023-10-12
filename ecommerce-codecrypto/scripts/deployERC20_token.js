// scripts/deploy.js
const { ethers } = require("hardhat");

async function main() {

  // Get the contract owner
  const contractOwner = await ethers.getSigners();
  console.log(`Deploying contract from: ${contractOwner[0].address}`);

  // Hardhat helper to get the ethers contractFactory object
  const CodeCryptoToken = await ethers.getContractFactory('CodeCryptoToken');

  // Deploy the contract
  console.log('Deploying CodeCryptoToken...');
  const codeCryptoToken = await CodeCryptoToken.deploy();
  await codeCryptoToken.deployed();
  console.log(`CodeCryptoToken deployed to: ${codeCryptoToken.address}`)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });

  