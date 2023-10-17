// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {ERC20Burnable} from "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

contract CodeCryptoToken is ERC20, ERC20Burnable, Ownable {
    constructor() ERC20("CodeCryptoToken", "CC") {}

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}