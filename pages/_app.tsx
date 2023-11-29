import { Web3ModalProvider } from "@/src/context/Web3Modal";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export const metadata = {
  title: "Web3Modal",
  description: "Web3Modal Example",
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Web3ModalProvider>
      <Component {...pageProps} />
    </Web3ModalProvider>
  );
}
