import React, { ReactNode, useReducer } from "react";
import { Web3ReactHooks } from "@web3-react/core";
import { MetaMask } from "@web3-react/metamask";
import { WalletConnect } from "@web3-react/walletconnect";

import { hooks as metaMaskHooks, metaMask } from "../connectors/metaMask";
import {
  hooks as walletConnectHooks,
  walletConnect,
} from "../connectors/walletConnect";

export const CustomWeb3Context = React.createContext(null);

const connectors: [MetaMask | WalletConnect, Web3ReactHooks][] = [
  [metaMask, metaMaskHooks],
  [walletConnect, walletConnectHooks],
];

export function CustomWeb3ContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <CustomWeb3Context.Provider value={null}>
      {children}
    </CustomWeb3Context.Provider>
  );
}
