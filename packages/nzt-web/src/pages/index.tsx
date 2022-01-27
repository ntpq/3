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
import { YourContract__factory } from '../generated/factories/YourContract__factory'
import { YourContract } from 'generated/YourContract'




const FullMap: any = dynamic(() => import('../components/Maps') as any, {
  ssr: false,
})

export const Home = observer(() => {
  const { lang, god } = useStore()
  const { library, chainId } = useWeb3React()

  const addr = '0x03a9Ca22532c15F6D1A52f7D00fC85D956bd45E9'
  const ccc = new MyOracle__factory().attach(addr)

  const [rectangle, setRectangle] = React.useState<[number, number, string][]>([])

  async function run() {
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

    if (library) {
      const yourContract:YourContract = new YourContract__factory().attach('0x9D71D7bEe4adb538c684A3a1406F4846e5F03724').connect(library.getSigner())
      // const tx = await yourContract.setPurpose("Hello World");
      // tx.wait()
      console.log('purpose:', await yourContract.getPurpose())
      // const await tx.wait()
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
