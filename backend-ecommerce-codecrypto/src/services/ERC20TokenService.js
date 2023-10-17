const ethers = require('ethers');  
const url = 'http://127.0.0.1:8545/';
const customHttpProvider = new ethers.JsonRpcProvider(url);
const signer = new ethers.Wallet("0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80", customHttpProvider);
const abi = require("../../abiToken.json");
const erc20CodeCryptoToken = new ethers.Contract("0x95401dc811bb5740090279Ba06cfA8fcF6113778", abi, signer);

const name = async() => {
    
    const name = await erc20CodeCryptoToken.name();
    return name;
}

const symbol = async() => {
    
    const symbol = await erc20CodeCryptoToken.symbol();
    return JSON.parse(symbol);
}

const decimals = async() => {
    
    const decimals = await erc20CodeCryptoToken.decimals();
    return parseInt(decimals);
}

const totalSupply = async() => {
   
    const totalSupply = await erc20CodeCryptoToken.totalSupply();
    return parseInt(totalSupply);
}

const balanceOf = async(address) => {

    const balance = await erc20CodeCryptoToken.balanceOf(address);
    return parseInt(balance);
}

const transfer = async(addressTo, units) => {
    
    const transfer = await erc20CodeCryptoToken.transfer(addressTo, units);

    return transfer;

}

const approve = async() => {
    // approve(address spender, uint256 amount)
    console.log(`Setting allowance amount of spender over the caller\'s ${symbol} tokens...`);
    const approveAmount = 10000;
    console.log(`This example allows the contractOwner to spend up to ${approveAmount} of the recipient\'s ${symbol} token`);
    const signerContract = funToken.connect(signers[1]); // Creates a new instance of the contract connected to the recipient
    await signerContract.approve(ownerAddress, ethers.utils.parseUnits(approveAmount.toString(), decimals));
    console.log(`Spending approved\n`);
}

const allowance = async() => {
    console.log(`Getting the contracOwner spending allowance over recipient\'s ${symbol} tokens...`);
    let allowance = await funToken.allowance(recipientAddress, ownerAddress);
    console.log(`contractOwner Allowance: ${ethers.utils.formatUnits(allowance, decimals)} ${symbol}\n`);

}

const transferFrom = async() => {
     // transferFrom(address from, address to, uint256 amount)
     const transferFromAmount = 100;
     console.log(`contracOwner transfers ${transferFromAmount} ${symbol} from recipient\'s account into own account...`);
     await funToken.transferFrom(recipientAddress, ownerAddress, ethers.utils.parseUnits(transferFromAmount.toString(), decimals));
     ownerBalance = await funToken.balanceOf(ownerAddress);
     console.log(`New owner balance (${ownerAddress}): ${ethers.utils.formatUnits(ownerBalance, decimals)} ${symbol}`);
     recipientBalance = await funToken.balanceOf(recipientAddress);
     console.log(`New recipient balance (${recipientAddress}): ${ethers.utils.formatUnits(recipientBalance, decimals)} ${symbol}`);
     allowance = await funToken.allowance(recipientAddress, ownerAddress);
     console.log(`Remaining allowance: ${ethers.utils.formatUnits(allowance, decimals)} ${symbol}\n`);
 
}

const increaseAllowance = async() => {
     // increaseAllowance(address spender, uint256 addedValue)
     const incrementAmount = 100;
     console.log(`Incrementing contractOwner allowance by ${incrementAmount} ${symbol}...`);
     await signerContract.increaseAllowance(ownerAddress, ethers.utils.parseUnits(incrementAmount.toString(), decimals));
     allowance = await funToken.allowance(recipientAddress, ownerAddress);
     console.log(`Updated allowance: ${ethers.utils.formatUnits(allowance, decimals)} ${symbol}\n`);
 
}

const decreaseAllowance = async() => {
     // decreaseAllowance(address spender, uint256 subtractedValue)
     const subtractAmount = 100;
     console.log(`Subtracting contractOwner allowance by ${subtractAmount} ${symbol}...`);
     await signerContract.decreaseAllowance(ownerAddress, ethers.utils.parseUnits(subtractAmount.toString(), decimals));
     allowance = await funToken.allowance(recipientAddress, ownerAddress);
     console.log(`Updated allowance: ${ethers.utils.formatUnits(allowance, decimals)} ${symbol}\n`);    
}

module.exports = {
    name,
    symbol,
    decimals,
    totalSupply,
    balanceOf,
    transfer,
    approve,
    allowance,
    transferFrom,
    increaseAllowance,
    decreaseAllowance
}