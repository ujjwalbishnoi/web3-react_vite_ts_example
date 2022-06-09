import { initializeConnector } from "@web3-react/core";
import { WalletConnect } from "@web3-react/walletconnect";
import { INFURA_NETWORK_URLS } from "../params/infura";

export const [walletConnect, hooks] = initializeConnector<WalletConnect>(
  (actions) =>
    new WalletConnect({
      actions,
      options: {
        rpc: INFURA_NETWORK_URLS,
      },
    })
);
