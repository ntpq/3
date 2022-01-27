#!/bin/zsh

# pushd ../hardhat-ts
# yarn compile
# popd
# rm -Rvf ./src/typechain
# rsync -avz ../vite-app-ts/src/generated/contract-types ./src
# cat ../nazt-nft/deployments/rinkeby/MyNFT.json | jq .address

ls -l ../hardhat-ts/generated/deployments/iotexTestnet/*.json
cat ../hardhat-ts/generated/deployments/iotexTestnet/*.json | jq .address
