const hre = require("hardhat");
const { JsonRpcProvider } = require('ethers');
const addressContrato = "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707";

async function main(){

    const provider = new JsonRpcProvider("http://127.0.0.1:8545/");
    const signer = await provider.getSigner();

    const contrato = await hre.ethers.getContractAt("Contador", addressContrato, signer);

    await contrato.incrementar();
    await contrato.incrementar();
    await contrato.incrementar();
    await contrato.incrementar();
    await contrato.incrementar();

    const contador = await contrato.getContador();
    return console.log(contador);
}

main()