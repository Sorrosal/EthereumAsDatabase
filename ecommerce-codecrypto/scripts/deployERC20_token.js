const hre = require("hardhat");
const { JsonRpcProvider } = require('ethers');

async function main() {

  const provider = new JsonRpcProvider("http://127.0.0.1:8545/");
  const signer = await provider.getSigner();
  const codeCryptoToken = await hre.ethers.deployContract("CodeCryptoToken");

  await codeCryptoToken.waitForDeployment();
  
  console.log(
   `Contract deployed --> address  ${codeCryptoToken.target} \n`
  );

  const codeCryptoTokenContract = await hre.ethers.getContractAt("CodeCryptoToken", codeCryptoToken.target, signer);
  codeCryptoTokenContract.mint(signer.address,100000000000000);

  // name()
  const name = await codeCryptoTokenContract.name();
  console.log(`Token Name: ${name}\n`);

  // symbol()
  const symbol = await codeCryptoTokenContract.symbol();
  console.log(`Token Symbol: ${symbol}\n`);

  // decimals()
  const decimals = await codeCryptoTokenContract.decimals();
  console.log(`Token Decimals: ${decimals}\n`);

  // totalSupply()
  const totalSupply = await codeCryptoTokenContract.totalSupply();
  console.log(`Total Supply including all decimals: ${totalSupply}`);

   // balanceOf(address account)
   const signers = await ethers.getSigners();
   const ownerAddress = signer.address;
   let ownerBalance = await codeCryptoTokenContract.balanceOf(ownerAddress);
   console.log(`Contract owner at ${ownerAddress} has a ${symbol} balance of ${ownerBalance}`);

   // transfer(to, amount)
  const recipientAddress = '0xABb4a0038103CF22c5Cd0245B73CCC14a938152D';
  console.log(`Transferring ${100000000000} ${symbol} tokens to ${recipientAddress} from ${ownerAddress}`);
  await codeCryptoTokenContract.transfer('0xABb4a0038103CF22c5Cd0245B73CCC14a938152D', 100000000000);

  ownerBalance = await codeCryptoTokenContract.balanceOf(ownerAddress);
  console.log(`Balance of owner (${ownerAddress}): ${ownerBalance} ${symbol}`);
  let recipientBalance = await codeCryptoTokenContract.balanceOf(recipientAddress);
  console.log(`Balance of recipient (${recipientAddress}): ${recipientBalance} ${symbol}\n`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
  