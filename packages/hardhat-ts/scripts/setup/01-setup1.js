// const { ethers } = require("ethers");
const hre = require('hardhat');
const ethers = hre.ethers;
async function main() {
  console.log('01-setup1.js');
  console.log(hre);
  console.log(ethers);
  // let myOracleContract = await hre.ethers.getContract('MyOracle');
  // console.log(await contract2.valueOf);
  // console.log(u.toString());
  // const u2 = await contract2.dummy();
  // console.log(u2);
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
