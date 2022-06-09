/**
 * List of all the networks supported by the Uniswap Interface
 */
export enum SupportedChainId {
  POLYGON_MUMBAI_TESTNET = 80001,
}

export const CHAIN_IDS_TO_NAMES: { [SupportedChainId: number]: string } = {
  [SupportedChainId.POLYGON_MUMBAI_TESTNET]: "Polygon Mumbai Testnet",
};

/**
 * Array of all the supported chain IDs
 */
export const ALL_SUPPORTED_CHAIN_IDS: SupportedChainId[] = Object.values(
  SupportedChainId
).filter((id) => typeof id === "number") as SupportedChainId[];
