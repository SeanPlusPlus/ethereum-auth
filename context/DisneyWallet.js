import React, {
  createContext,
} from 'react';

const initialState = {}

const DisneyWallet = createContext(initialState);

export const DisneyWalletProvider = ({
  children
}) => {
  return ( <DisneyWallet.Provider value = {null} > {
      children
    } </DisneyWallet.Provider>
  )
}