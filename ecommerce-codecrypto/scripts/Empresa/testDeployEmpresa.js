const hre = require("hardhat");
const { JsonRpcProvider } = require('ethers');
const addressContrato = "0x9a9f2ccfde556a7e9ff0848998aa4a0cfd8863ae";

async function main(){

    const provider = new JsonRpcProvider("http://127.0.0.1:8545/");
    const signer = await provider.getSigner();

    const contrato = await hre.ethers.getContractAt("Empresa", addressContrato, signer);

    
     await contrato.darDeAltaEmpresa('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266','Empresa 1');
     await contrato.darDeAltaEmpresa('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266','Empresa 2');
     await contrato.darDeAltaEmpresa('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266','Empresa 3');
     await contrato.darDeAltaEmpresa('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266','Empresa 4');
     await contrato.darDeAltaEmpresa('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266','Empresa 5');

    const numeroEmpresas = await contrato.getEmpresas();
    return console.log(numeroEmpresas);
}

main()