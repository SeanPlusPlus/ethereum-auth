import React, { useContext } from 'react'
import { ethers } from 'ethers'
import Web3Modal from 'web3modal'
import WalletConnectProvider from '@walletconnect/web3-provider'
import { DisneyWalletProvider } from '../context/DisneyWallet'
import { GlobalContext } from '../context/GlobalState'
import { disney } from '../utils/disney'

// components
import { Info } from '../components/Info'

export const ConnectWallet = () => {
  const {
    setUser,
    user: {
      error,
    }
  } = useContext(GlobalContext);
 
  async function getWeb3Modal() {
    const providerOptions = {
      "custom-example": {
        display: {
          logo: `data:image/svg+xml;base64,${disney}`,
          name: "Disney OneId",
          description: "TODO: Connect with Disney OneId"
        },
        package: DisneyWalletProvider,
        options: {
          apiKey: "DISNEY_ONE_ID_PROVIDER_API_KEY"
        },
        connector: async (ProviderPackage, options) => {
          const provider = new ProviderPackage(options);

          try {
            await provider.enable();
          } catch (error) {
            console.log(error);
          }
    
          return provider;
        }
      },
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          infuraId: '8cf3cad623da43f9a84ab5ac94230cf6'
        },
      },
    }
    const web3Modal = new Web3Modal({
      network: 'mainnet',
      cacheProvider: false,
      providerOptions,
    })
    return web3Modal
  }

  async function connect() {
    const web3Modal = await getWeb3Modal()
    const connection = await web3Modal.connect()
    let provider, accounts
    try {
      provider = new ethers.providers.Web3Provider(connection)
      accounts = await provider.listAccounts()
      setUser({
        connection,
        account: accounts[0],
      });
    } catch (error) {
      setUser({
        error: true,
      })
    }
  }

  return (
    <>
      {error && (
        <Info message="This provider is not yet supported" /> 
      )}
      <button className="btn btn-primary" onClick={connect}>Connect Wallet</button>
    </>
  )
}
