#!/bin/zsh

pushd ../hardhat-ts
yarn compile
popd
rm -Rvf ./src/typechain
rsync -avz ../vite-app-ts/src/generated/contract-types ./src
# cat ../nazt-nft/deployments/rinkeby/MyNFT.json | jq .address
