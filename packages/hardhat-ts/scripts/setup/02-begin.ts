import { BigNumber, Signer } from 'ethers';
import { MyOracle } from '../../typechain';
const fetch = require('node-fetch');
const hre = require('hardhat');
// import * as hre from 'hardhat';
import { ethers } from "hardhat";



async function main() {
    let accounts: Signer[] = await hre.ethers.getSigners();
    let contract: MyOracle;

    contract = (await hre.ethers.getContract('MyOracle')) as MyOracle;
    const { deployer } = await hre.getNamedAccounts();
    console.log({ deployer })


}

if (require.main === module) {
    main()
        .then(() => process.exit(0))
        .catch((error) => {
            console.error(error);
            process.exit(1);
        });
} else {
    module.exports = main;
}
