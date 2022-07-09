import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-web3";

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.9"
      },
      {
        version: "0.6.0",
      }
    ],
  },
  defaultNetwork: "localhost",
};

export default config;
