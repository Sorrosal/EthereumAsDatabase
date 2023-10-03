// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Empresa {

    Empresa[] public empresas;
    
    struct Empresa {
        address addressEmpresa;
        string nombreEmpresa;
    }

    function darDeAltaEmpresa (address _addressEmpresa, string calldata _nombreEmpresa ) external {
        Empresa memory empresa = Empresa(_addressEmpresa, _nombreEmpresa);
        empresas.push(empresa);
    }

    function getEmpresas() public view returns (Empresa[] memory) {
       return empresas;
    }
}