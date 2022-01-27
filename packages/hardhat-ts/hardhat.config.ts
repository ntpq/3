/**
 * @type import('hardhat/config').HardhatUserConfig
 */

import "@typechain/hardhat";
import '@nomiclabs/hardhat-waffle';
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-solhint";
import "dotenv/config";
import "solidity-coverage";
import { HardhatUserConfig } from 'hardhat/types';
import 'hardhat-deploy';
import '@openzeppelin/hardhat-upgrades';
import 'hardhat-abi-exporter';
import '@openzeppelin/hardhat-upgrades';
import 'hardhat-gas-reporter';


require('./hardhat');

// import "./tasks/accounts";
// import "./tasks/balance";
// import "./tasks/block-number";
// import "./tasks/create-collectibles";

// const MAINNET_RPC_URL =
//     process.env.MAINNET_RPC_URL ||
//     process.env.ALCHEMY_MAINNET_RPC_URL ||
//     "https://eth-mainnet.alchemyapi.io/v2/your-api-key";
// const RINKEBY_RPC_URL =
//     process.env.RINKEBY_RPC_URL ||
//     "https://eth-rinkeby.alchemyapi.io/v2/your-api-key";
// const KOVAN_RPC_URL =
//     process.env.KOVAN_RPC_URL ||
//     "https://eth-kovan.alchemyapi.io/v2/your-api-key";
// const ETHERSCAN_API_KEY =
//     process.env.ETHERSCAN_API_KEY || "Your etherscan API key";
// optional

// const MNEMONIC = process.env.MNEMONIC || "your mnemonic";

const PRIVATE_KEY = process.env.PRIVATE_KEY || "your private key";
const PRIVATE_KEY_2 = process.env.PRIVATE_KEY_2 || "your private key";
const PINATA_API_KEY = process.env.PINATA_API_KEY;
const PINATA_API_SECRET = process.env.PINATA_API_SECRET;

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
    },
    bscTest: {
      url: 'https://data-seed-prebsc-1-s1.binance.org:8545',
      saveDeployments: true,
      tags: ['bscTest'],
      accounts: [PRIVATE_KEY, PRIVATE_KEY_2],
    },
    testnet: {
      url: 'https://babel-api.testnet.iotex.io',
      accounts: [PRIVATE_KEY, PRIVATE_KEY_2],
      chainId: 4690,
      gas: 8500000,
      saveDeployments: true,
      gasPrice: 1000000000000
    },
    mainnet: {
      url: 'https://babel-api.mainnet.iotex.io',
      accounts: [PRIVATE_KEY, PRIVATE_KEY_2],
      saveDeployments: true,
      timeout: 3 * 20000,
      chainId: 4689,
      gas: 8500000,
      gasPrice: 1000000000000
    },
    kovan: {
      url: 'https://kovan.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
      saveDeployments: true,
      tags: ['kovan'],
      accounts: [PRIVATE_KEY, PRIVATE_KEY_2],
    },
    rinkeby: {
      url: 'https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
      saveDeployments: true,
      tags: ['rinkeby'],
      accounts: [PRIVATE_KEY, PRIVATE_KEY_2],
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: false,
        runs: 200
      },
      evmVersion: "istanbul"
    }
  },
  namedAccounts: {
    deployer: 0,
    simpleERC20Beneficiary: 1,
  },
  paths: {
    sources: 'contracts',
  },
  typechain: {
    outDir: "typechain",
    target: "ethers-v5",
  },
};


// https://github.com/wighawag/tutorial-hardhat-deploy
// https://github.com/protokol/solidity-typescript-hardhat-template
// yarn hardhat --network rinkeby etherscan-verify --api-key <api-key>


export default config
