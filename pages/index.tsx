import { Discover } from "@/sections/Discover";
import { Hero } from "@/sections/Hero";
import { Container, Footer } from "@/components/Layout";
import { Navbar } from "@/components/Navbar";
import { EthereumIcon } from "@/components/Icons/EthereumIcon";
import { FigmaIcon } from "@/components/Icons/FigmaIcon";
import { GithubIcon } from "@/components/Icons/GithubIcon";
import { OpenseaIcon } from "@/components/Icons/OpenseaIcon";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar showLogo sticky showProfile />
      <Container>
        <Hero />
        <Discover />
        <Footer>
          <h1>generate nfts and verify digital content ownership</h1>
          <div>
            <Link href="https://www.figma.com">
              <EthereumIcon />
            </Link>
            <Link href="https://www.figma.com">
              <GithubIcon />
            </Link>
            <Link href="https://www.figma.com">
              <OpenseaIcon />
            </Link>
            <Link href="https://www.figma.com">
              <FigmaIcon />
            </Link>
          </div>
        </Footer>
      </Container>
    </>
  );
}
