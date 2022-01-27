import { BigNumber, ContractTransaction, Signer } from 'ethers';
import { getNamedAccounts } from 'hardhat';
import { MyOracle } from '../../typechain';
const fetch = require('node-fetch');
const hre = require('hardhat');
async function main() {
    let accounts: Signer[] = await hre.ethers.getSigners();
    let contract: MyOracle;

    contract = (await hre.ethers.getContract('MyOracle')) as MyOracle;
    const { deployer, tokenOwner } = await getNamedAccounts();

    await contract.deployed();
    console.log('...', contract.address);

    const data = await fetch('https://www-old.cmuccdc.org/assets/api/haze/pwa/json/stations.json')
    const stations = await data.json();

    // for (let i = 0; i < stations.length; i++) {
    //     await contract.set(i, i);
    // }

    // for (const s of stations.slice(-10)) {
    //     console.log(s.id, s.dustboy_id, s.dustboy_uri, s.pm10, s.pm25, s.dustboy_lat, s.dustboy_lon);
    //     await contract.addLocation(s.dustboy_lat, s.dustboy_lon, s.dustboy_id);
    // }

    // await contract.setMeta(0, '17.949968', '98.690502', "DustBoy H014")
    // await contract.setMeta(1, '14.592535', '100.997789', "NH-136")
    // await contract.setMeta(2, '18.761371', '98.931855', "DustBoy006")
    // await contract.setMeta(3, '13.735867', '100.279984', "NH-137")
    // await contract.setMeta(4, '15.700899', '104.494034', "NH-155")
    // await contract.setMeta(5, '15.862836', '104.627296', "NH-156")
    // await contract.setMeta(6, '18.84665', '98.732204', "DustBoy H008")
    // await contract.setMeta(7, '19.624357', '99.359879', "NH-184")
    // await contract.setMeta(8, '18.5892286', '99.0390486', "NH-196")
    // await contract.setMeta(9, '16.9908527', '98.5271491', "DustBoy051")

    // await contract.addLocation('17.949968', '98.690502', "DustBoy H014")
    // await contract.addLocation('14.592535', '100.997789', "NH-136")
    // await contract.addLocation('18.761371', '98.931855', "DustBoy006")
    // await contract.addLocation('13.735867', '100.279984', "NH-137")
    // await contract.addLocation('15.700899', '104.494034', "NH-155")
    // await contract.addLocation('15.862836', '104.627296', "NH-156")
    // await contract.addLocation('18.84665', '98.732204', "DustBoy H008")
    // await contract.addLocation('19.624357', '99.359879', "NH-184")
    // await contract.addLocation('18.5892286', '99.0390486', "NH-196")
    // await contract.addLocation('16.9908527', '98.5271491', "DustBoy051")

    // console.log(await contract.findMapLocation(0, 0))



    // const results: MyOracle.LocationStructOutput[] = await contract.getAllLocations();
    // const results: ContractTransaction = await contract.getAllLocations();
    // const tx = await results.wait();
    // console.log('results', results)
    // console.log('tx', tx)

    console.log(await contract.getAllLocations());

    const results2: BigNumber[] = await contract.getArr();
    console.log('results', results2.map(x => x.toString()))
    // console.log('tx', tx)

    // console.log(await contract.locations)
    // const c = await contract.locations.call()
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
