import { TransactionResponse } from '@ethersproject/providers'
import { CallParams } from '../../../type'
import { GodStore } from '../god'
import { MappingState } from '../standard/MappingState'
import { StorageState } from '../standard/StorageState'
import { ChainState } from './ChainState'

export interface NetworkState {
  god: GodStore
  chain: MappingState<ChainState>
  allowChains: number[]
  account: string
  connector: { latestProvider: StorageState<string>; showConnector: boolean }
  walletInfo: { visible: boolean }
  currentChain: ChainState
  info: {
    [key: string]: any
  }

  multicall(calls: Partial<CallParams>[]): Promise<any[]>
  setAccount: Function
  loadBalance: Function
  execContract(call: {
    address: string
    abi: any
    method: string
    params?: any[]
    options?: any
  }): Promise<Partial<TransactionResponse>>
  isAddress(address: string): boolean
}
