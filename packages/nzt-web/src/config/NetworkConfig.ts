import { MappingState } from '@/store/standard/MappingState'
import { allowChains } from '../lib/web3-react'
import { EthNetworkState } from '../store/lib/EthNetworkState'
import { BSCMainnetConfig } from './BSCMainnetConfig'
import { BSCTestnetConfig } from './BSCTestnetConfig'
import { ETHKovanConfig } from './ETHKovanConfig'
import { ETHMainnetConfig } from './ETHMainnetConfig'
import { IotexMainnetConfig } from './IotexMainnetConfig'
import { IotexTestnetConfig } from './IotexTestnetConfig'
import { PolygonMainnetConfig } from './PolygonMainnetConfig'

const EthChains = [
  BSCMainnetConfig,
  BSCTestnetConfig,
  ETHMainnetConfig,
  ETHKovanConfig,
  IotexTestnetConfig,
  IotexMainnetConfig,
  PolygonMainnetConfig,
]

export const EthNetworkConfig = new EthNetworkState({
  allowChains,
  info: {
    token: {
      tokenExample: '0x000000000000000000000000000000000000000',
    },
  },
  chain: new MappingState({
    currentId: IotexTestnetConfig.chainId /* setDefault ChainID */,
    map: EthChains.reduce((p, c) => {
      p[c.chainId] = c
      return p
    }, {}),
  }),
})
