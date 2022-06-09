import { SupportedChainId } from './chains'

// const INFURA_KEY = process.env.REACT_APP_INFURA_KEY
// if (typeof INFURA_KEY === 'undefined') {
//   throw new Error(`REACT_APP_INFURA_KEY must be a defined environment variable`)
// }

// const INFURA_KEY = '27e484dcd9e3efcfd25a83a78777cdf1';
// const INFURA_KEY = '4bf032f2d38a4ed6bb975b80d6340847';
/**
 * These are the network URLs used by the interface when there is not another available source of chain data
 */
export const INFURA_NETWORK_URLS: { [key in SupportedChainId]: string } = {
  [SupportedChainId.POLYGON_MUMBAI_TESTNET]: `https://matic-mumbai.chainstacklabs.com`,
}
