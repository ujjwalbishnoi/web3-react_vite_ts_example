import { useState } from "react";
import {
  useWeb3React,
  Web3ReactHooks,
  Web3ReactProvider,
} from "@web3-react/core";
import { MetaMask } from "@web3-react/metamask";
import { WalletConnect } from "@web3-react/walletconnect";
// import type { Connector } from "@web3-react/types";
// import ws from "ws";
// import WebSocket from "@types/ws";

import { hooks as metaMaskHooks, metaMask } from "./connectors/metaMask";
import {
  hooks as walletConnectHooks,
  walletConnect,
} from "./connectors/walletConnect";

import switchToNetwork from "./utils/switchNetwork";

import "./App.css";
import { ExternalProvider } from "@ethersproject/providers";

// window.WebSocket = ws as WebSocket;

// const walletConnector = new WebSocket();
// // options

const connectors: [MetaMask | WalletConnect, Web3ReactHooks][] = [
  [metaMask, metaMaskHooks],
  [walletConnect, walletConnectHooks],
];

function Child() {
  const Web3React = useWeb3React();
  const { connector, isActive, chainId } = Web3React;

  console.log(Web3React);

  const isMetamskConnected = isActive && connector instanceof MetaMask;
  const isWalletConnectConnected =
    isActive && connector instanceof WalletConnect;

  return (
    <section style={{ display: "flex" }}>
      <section>
        <button
          onClick={() => {
            if (
              isMetamskConnected &&
              metaMask !== undefined &&
              metaMask.deactivate !== undefined
            ) {
              console.log("deactivating metamask.......");
              metaMask.deactivate();
            } else {
              console.log("activating metamask.......");
              metaMask.activate();
            }
          }}
        >
          {isMetamskConnected ? "Disconnect" : "Connect"}
          With Metamask
        </button>
        {isMetamskConnected && chainId !== 80001 ? (
          <button
            onClick={() => {
              switchToNetwork({
                provider: metaMask.provider as ExternalProvider,
                chainId: 80001,
              });
              // await metaMask.activate(80001);
            }}
          >
            Switch to Polygon Network
          </button>
        ) : null}
      </section>
      <section>
        <button
          onClick={() => {
            if (isWalletConnectConnected) {
              walletConnect.deactivate();
            } else {
              walletConnect.activate().catch((error) => {
                console.log("errorwa....", error);
              });
            }
          }}
        >
          {isWalletConnectConnected ? "Disconnect" : "Connect"}
          With WalletConnect
        </button>
        {isWalletConnectConnected && chainId !== 80001 ? (
          <button
            onClick={() => {
              switchToNetwork({
                provider: connector.provider,
                chainId: 80001,
              });
            }}
          >
            Switch to Polygon Network
          </button>
        ) : null}
      </section>
    </section>
  );
}

function ProviderExample() {
  return (
    <Web3ReactProvider connectors={connectors}>
      <Child />
    </Web3ReactProvider>
  );
}

function App() {
  return (
    <div className="App">
      <ProviderExample />
    </div>
  );
}

export default App;
