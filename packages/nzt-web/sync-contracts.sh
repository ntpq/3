#!/bin/zsh

pushd ../hardhat-ts
yarn compile
popd
rm -Rvf ./src/typechain
rsync -avz ../hardhat-ts/typechain ./src
# cat ../nazt-nft/deployments/rinkeby/MyNFT.json | jq .address
