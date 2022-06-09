import { SupportedChainId } from "./chains";

interface BaseChainInfo {
  readonly chainId: number;
  readonly chainIdInHex: string;
  readonly rpcUrls: string[];
  readonly chainName: string;
  readonly nativeCurrency: { name: string; decimals: number; symbol: string };
  readonly blockExplorerUrl: string[];
  readonly iconUrls: string[];
}

export type ChainInfoMap = { readonly [chainId: number]: BaseChainInfo };

export const CHAIN_INFO: ChainInfoMap = {
  [SupportedChainId.POLYGON_MUMBAI_TESTNET]: {
    chainId: 80001,
    chainIdInHex: "0x13881",
    rpcUrls: ["https://matic-mumbai.chainstacklabs.com"],
    chainName: "Polygon Mumbai Testnet",
    nativeCurrency: { name: "Polygon", decimals: 18, symbol: "MATIC" },
    blockExplorerUrl: ["https://mumbai.polygonscan.com/"],
    iconUrls: [],
  },
};
