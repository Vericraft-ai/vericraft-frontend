
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { ThorinGlobalStyles, lightTheme } from "@ensdomains/thorin";
import "@/styles/fonts.css";
import Head from "next/head";
import { GeneralSeo } from "@/sections/GeneralSeo";
import { Web3ModalProvider } from "@/context/Web3Modal";
import { GlobalStyle } from "@/styles/GlobalStyle";

export const metadata = {
  title: "Web3Modal",
  description: "Web3Modal Example",
};

const theme = {
  ...lightTheme,
  colors: {
    ...lightTheme.colors,
    text: "#000",
    background: "#fff",
    border: "#E8E8E8",
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
    <ThorinGlobalStyles />
    <GlobalStyle />
    <Head>
      <title>VericraftAI</title>
      <meta name="viewport " content="width=device-width,initial-scale=1" />
      <GeneralSeo />
    </Head>
    <Web3ModalProvider>
      <Component {...pageProps} />
    </Web3ModalProvider>
    </ThemeProvider>
  );
}
