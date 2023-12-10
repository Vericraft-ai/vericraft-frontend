import { createWeb3Modal, defaultConfig } from "@web3modal/ethers/react";

const projectId = process.env.NEXT_PUBLIC_WALLET_CONNECT_ID || "";

const mainnet = {
  chainId: 80001,
  name: "Mumbai Testnet",
  currency: "MATIC",
  explorerUrl: "https://mumbai.polygonscan.com",
  rpcUrl: "https://polygon-mumbai-pokt.nodies.app",
};
const metadata = {
  name: "Vericraft AI",
  description: "Verify digital content ownership",
  url: "https://vericraft-frontend.vercel.app/",
  icons: ["https://vericraft-frontend.vercel.app/logo.svg"],
};

createWeb3Modal({
  ethersConfig: defaultConfig({ metadata }),
  chains: [mainnet],
  projectId,
});

export function Web3ModalProvider({ children }: { children: JSX.Element }) {
  return children;
}
