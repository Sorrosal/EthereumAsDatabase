const ethers = require('ethers');  
const url = 'http://127.0.0.1:8545/';
const customHttpProvider = new ethers.JsonRpcProvider(url);
const signer = new ethers.Wallet("0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80", customHttpProvider);
const abi = require("../../abi.json");
const erc20CodeCryptoToken = new ethers.Contract("0x9A9f2CCfdE556A7E9Ff0848998Aa4a0CFD8863AE", abi, signer);

const name = async() => {
    
    const name = await erc20CodeCryptoToken.name();
    return name;
}

const symbol = async() => {
    
    const symbol = await erc20CodeCryptoToken.symbol();
    return symbol;
}

const decimals = async() => {
    
    const decimals = await erc20CodeCryptoToken.decimals();
    return decimals;
}

const totalSupply = async() => {
   
    const totalSupply = await erc20CodeCryptoToken.totalSupply();
    console.log(`Total Supply including all decimals: ${totalSupply}`);
    console.log(`Total supply including all decimals comma separated: ${ethers.utils.commify(totalSupply)}`);
    console.log(`Total Supply in FUN: ${ethers.utils.formatUnits(totalSupply, decimals)}\n`);

    return totalSupply;
}

const balanceOf = async() => {
    
    const signers = await ethers.getSigners();
    const ownerAddress = signers[0].address;
    let ownerBalance = await erc20CodeCryptoToken.balanceOf(ownerAddress);
    console.log(`Contract owner at ${ownerAddress} has a ${symbol} balance of ${ethers.utils.formatUnits(ownerBalance, decimals)}\n`);

}

const transfer = async() => {
    
    // transfer(to, amount)
    console.log('Initiating a transfer...');
    const recipientAddress = signers[1].address;
    const transferAmount = 100000;
    console.log(`Transferring ${transferAmount} ${symbol} tokens to ${recipientAddress} from ${ownerAddress}`);
    await erc20CodeCryptoToken.transfer(recipientAddress, ethers.utils.parseUnits(transferAmount.toString(), decimals));
    console.log('Transfer completed');
    ownerBalance = await erc20CodeCryptoToken.balanceOf(ownerAddress);
    console.log(`Balance of owner (${ownerAddress}): ${ethers.utils.formatUnits(ownerBalance, decimals)} ${symbol}`);
    let recipientBalance = await erc20CodeCryptoToken.balanceOf(recipientAddress);
    console.log(`Balance of recipient (${recipientAddress}): ${ethers.utils.formatUnits(recipientBalance, decimals)} ${symbol}\n`);
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