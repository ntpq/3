import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-waffle';
import * as fs from 'fs';
import * as chalk from 'chalk';
import * as hre from 'hardhat';
import path from 'path';

const publishGenerated = '../vite-app-ts/src/generated/contracts';
const publishDir = `${publishGenerated}/contracts`;
const deploymentsDir = './generated/deployments';
const typechainDir = './generated/typechain';
const graphDir = '../subgraph';


async function main() {
  console.log(hre)
  console.log(hre.ethers)
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
