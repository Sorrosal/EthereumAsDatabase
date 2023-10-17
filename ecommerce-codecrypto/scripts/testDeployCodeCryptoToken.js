const hre = require("hardhat");
const { JsonRpcProvider } = require('ethers');
const contractAddress = "0x0B306BF915C4d645ff596e518fAf3F9669b97016";

async function main(){

    const provider = new JsonRpcProvider("http://127.0.0.1:8545/");
    const signer = await provider.getSigner();

    const codeCryptoToken = await hre.ethers.getContractAt("CodeCryptoToken", contractAddress, signer);
    codeCryptoToken.mint(signer.address,100000000000000);
    // name()
    console.log('Querying token name...');
    const name = await codeCryptoToken.name();
    console.log(`Token Name: ${name}\n`);

    // symbol()
    console.log('Querying token symbol...');
    const symbol = await codeCryptoToken.symbol();
    console.log(`Token Symbol: ${symbol}\n`);

    // decimals()
    console.log('Querying decimals...');
    const decimals = await codeCryptoToken.decimals();
    console.log(`Token Decimals: ${decimals}\n`);

    // totalSupply()
    console.log('Querying token supply...');
    const totalSupply = await codeCryptoToken.totalSupply();
    console.log(`Total Supply including all decimals: ${totalSupply}`);

     // balanceOf(address account)
     console.log('Getting the balance of contract owner...');
     const signers = await ethers.getSigners();
     const ownerAddress = signers[0].address;
     let ownerBalance = await codeCryptoToken.balanceOf(ownerAddress);
     console.log(`Contract owner at ${ownerAddress} has a ${symbol} balance of ${ownerBalance}`);

     // transfer(to, amount)
    console.log('Initiating a transfer...');
    const recipientAddress = '0xABb4a0038103CF22c5Cd0245B73CCC14a938152D';
    console.log(`Transferring ${transferAmount} ${symbol} tokens to ${recipientAddress} from ${ownerAddress}`);
    await codeCryptoToken.transfer('0xABb4a0038103CF22c5Cd0245B73CCC14a938152D', 100000000000);
    console.log('Transfer completed');
    ownerBalance = await codeCryptoToken.balanceOf(ownerAddress);
    console.log(`Balance of owner (${ownerAddress}): ${ownerBalance} ${symbol}`);
    let recipientBalance = await codeCryptoToken.balanceOf(recipientAddress);
    console.log(`Balance of recipient (${recipientAddress}): ${recipientBalance} ${symbol}\n`);
}

main()