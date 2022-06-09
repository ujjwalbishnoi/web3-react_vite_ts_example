import { useContext } from "react";

import { CustomWeb3Context } from "./provider";

export function useCustomWeb3React() {
  const web3 = useContext(CustomWeb3Context);
  if (!web3)
    throw Error(
      "useCustomWeb3React can only be used within the CustomWeb3ContextProvider component"
    );
  return web3;
}
