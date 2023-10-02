// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Contador {
    uint public contador;

    constructor(uint inicio) {
        contador = inicio;
    }

    function incrementar() public {
        contador++;
    }

    function decrementar() public {
        contador--;
    }

    function reset() public {
        contador = 0;
    }

    function getContador() public view returns (uint) {
       return contador;
    }
}