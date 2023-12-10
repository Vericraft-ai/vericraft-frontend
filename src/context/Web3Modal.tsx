import { createWeb3Modal, defaultConfig } from "@web3modal/ethers/react";

const projectId = process.env.NEXT_PUBLIC_WALLET_CONNECT_ID || "";

const mainnet = {
  chainId: 43113,
  name: "Avalanche Testnet C-Chain",
  currency: "AVAX",
  explorerUrl: "https://subnets-test.avax.network/",
  rpcUrl: "​https://api.avax-test.network/ext/bc/C/rpc",
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
