import { BigNumber, ContractTransaction, Signer } from 'ethers';
// import { getNamedAccounts } from 'hardhat';
import { YourContract } from '../typechain';
const fetch = require('node-fetch');
const hre = require('hardhat');
async function main() {
    let accounts: Signer[] = await hre.ethers.getSigners();
    let contract: YourContract;

    contract = (await hre.ethers.getContract('YourContract')) as YourContract;

    const tx = await contract.setPurpose("X");
    tx.wait();

    console.log(await contract.purpose())
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
