import { createWeb3Modal, defaultConfig } from "@web3modal/ethers/react";

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID || "";

const mainnet = {
  chainId: 43114,
  name: "Avalanche Network",
  currency: "ETH",
  explorerUrl: " https://snowtrace.io/",
  rpcUrl: "https://api.avax.network/ext/bc/C/rpc",
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
