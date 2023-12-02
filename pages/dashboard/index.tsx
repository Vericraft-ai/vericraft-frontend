import { Card } from "@/components/DiscoverCard/DiscoverCard";
import { LoginCard } from "@/components/LoginCard";
import { Navbar } from "@/components/Navbar";
import { ChatIcon } from "@/components/Icons/ChatIcon";
import { Logo } from "@/components/Icons/Logo";
import { TickSquareIcon } from "@/components/Icons/TickSquareIcon";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  height: 100vh;
`;

export const Col1 = styled(Card)`
  width: 30%;
  height: 100%;
  border-radius: 0;
  img {
    border-radius: 0;
  }
  .overlay {
    border-radius: 0;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const LoginCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  width: 32rem;
  height: 100%;
  position relative;

  .logo {
    margin-bottom: 3rem;
    align-self: flex-start;
  }
`;

const Col2 = styled.div`
  width: 70%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.background};
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 1rem;
  }

  & > div {
    display: grid;
    place-items: center;
    height: 100%;
  }

  .card-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    width: 32rem;
    margin: 0 auto;

    @media (max-width: 768px) {
      width: 100%;
      gap: 1rem;
    }

    .logo {
      margin-bottom: 1.5rem;
      align-self: flex-start;

      @media (max-width: 768px) {
        margin-bottom: 0.5rem;
      }
    }
  }
`;

export default function Login() {
  return (
    <>
      <Head>
        <title>Login | VericraftAi</title>
      </Head>

      <LoginContainer>
        <Col1>
          <Image src="/images/unsplash2.png" alt={"nft"} fill />
          <div className="overlay" />
          <div className="footer">
            <h3>Overpopulated ASM Rain</h3>
            <p>Floor: 0.57ETH</p>
          </div>
        </Col1>

        <Col2>
          <Navbar showProfile />

          <div>
            <div className="card-wrapper">
              <Logo className="logo" />
              <LoginCard
                Icon={ChatIcon}
                title="generate nfts"
                link="/dashboard/generate"
                description="create your digital content with ai and mint nft directly to your wallet"
              />
              <LoginCard
                Icon={TickSquareIcon}
                title="validate digital content"
                link="/dashboard/verify"
                description="use ai and nftproving and verifying ownership of digital content"
              />
            </div>
          </div>
        </Col2>
      </LoginContainer>
    </>
  );
}
