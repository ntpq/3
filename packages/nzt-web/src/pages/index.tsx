import { useInterval } from '@chakra-ui/react'
import { useWeb3React } from '@web3-react/core'
import 'leaflet/dist/images/marker-shadow.png'
import 'leaflet/dist/leaflet.css'
import { add } from 'lodash'
import { observer } from 'mobx-react-lite'
import dynamic from 'next/dynamic'
import React from 'react'
import ORACLE_ABI from '../constants/abi/myoracle.json'
import { useStore } from '../store'

import { MyOracle__factory } from '../generated/factories/MyOracle__factory'

// import { MyOracle__factory, Box__factory } from '@nazt/contracts'
// import * as cont from '@nazt/contracts'
// import {MyOracle} from '../typechain/MyOracle'

// const d = require("@nazt/contracts")




const FullMap: any = dynamic(() => import('../components/Maps') as any, {
  ssr: false,
})

export const Home = observer(() => {
  const { lang, god } = useStore()
  const { library, chainId } = useWeb3React()
  // const { library, chainId } = useEthers()
  // console.log('hh', nazt.MyOracleABI)
  // console.log(c.MyOracleABI, c.MyOracleFactory, c.typechain)
  // console.log('a', MyOracle__factory, Box__factory)

  // console.log(d.Box__factory)
  const addr = '0x6a32385ed3f04133b27BDe70AEfaA0b04Bb700BB'
  const ccc = new MyOracle__factory().attach(addr)
  // new MyOracle__factory().attach(addr)
  // ccc.getAllLocations

  // console.log('b', new MyOracle__factory().attach(addr))
  // console.log(ccc.dummy())
  // const rectangle: [number, number][] = [
  //   [18.776683, 98.985075],
  //   [14.592535, 100.997789],
  //   [18.761371, 98.931855],
  //   [13.735867, 100.279984],
  //   [15.700899, 104.494034],
  //   [15.862836, 104.627296],
  //   [18.84665, 98.732204],
  //   [19.624357, 99.359879],
  //   [18.5892286, 99.0390486],
  //   [16.9908527, 98.5271491],
  // ]

  const [rectangle, setRectangle] = React.useState<[number, number, string][]>([])

  async function run() {
    // console.log('god', god)
    try {
      const locations: any[] = (await god.currentNetwork.execContract({
        address: addr,
        abi: ORACLE_ABI,
        method: 'getAllLocations',
        params: [],
      })) as any[]
      // console.log(locations)

      const arr = []
      for (const loc of locations) {
        arr.push([loc.lat, loc.lon, loc.name])
      }

      if (rectangle.length != arr.length) {
        setRectangle(arr)
        console.log('updating..', arr[arr.length -1])
      }
      else {
        console.log('no change')
      }
        const contract =  ccc.connect(library.getSigner())
        console.log(">", await contract.dummy())
        console.log(await contract.getAllLocations());
    } catch (e) {
      console.log(e)
    }

  }

  useInterval(() => {
    run()
  }, 2000)

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     run()
  //   }, 5000)
  //   return () => clearInterval(interval)
  // }, [])

  return (
    <>
      <div className="container flex flex-col items-center mx-auto">
        <FullMap markers={rectangle} hello="world" />
      </div>
    </>
  )
})

export default Home
