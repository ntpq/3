import { Header } from '@/components/Header/index'
import { theme } from '@/lib/theme'
import { useStore } from '@/store/index'
import '@/styles/global.css'
import { ChakraProvider } from '@chakra-ui/react'
import { Web3ReactProvider } from '@web3-react/core'
import type { AppProps } from 'next/app'
import React, { useEffect, useMemo } from 'react'
import { Toaster } from 'react-hot-toast'
import { ETHProvider } from '../components/EthProvider'
import { WalletSelecter } from '../components/WalletSelecter/index'
import { getLibrary } from '../lib/web3-react'

function MyApp({ Component, pageProps }: AppProps) {
  const { lang, god } = useStore()
  useEffect(() => {
    lang.init()
    setInterval(() => {
      god.pollingData()
    }, 15000)
  }, [])
  // use useMemo to fix issue https://github.com/vercel/next.js/issues/12010
  return useMemo(() => {
    return (
      <ChakraProvider theme={theme}>
        <Web3ReactProvider getLibrary={getLibrary}>
          <WalletSelecter />
          <ETHProvider />
          <Toaster />
          <Header />
          <Component {...pageProps} />
        </Web3ReactProvider>
      </ChakraProvider>
    )
  }, [Component, pageProps])
}

export default MyApp
