import { BackButton } from "@/components/BackButton";
import { Center } from "@/components/Layout";
import { Navbar } from "@/components/Navbar";
import { Uploader } from "@/components/Uploader";
import { Button } from "@ensdomains/thorin";
import Head from "next/head";
import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  padding: 0 1rem;

  .center {
    margin-top: 9.5rem;

    @media (max-width: 768px) {
      margin-top: 7rem;
    }
  }

  .validate-btn {
    margin-top: 3rem;
    background-color: #000;
  }
`;

export default function VerifyNfts() {
  return (
    <>
      <Head>
        <title>Generate Nfts | VericraftAi</title>
      </Head>

      <Container>
        <div>
          <BackButton />
          <Navbar />
        </div>

        <Center className="center">
          <div style={{ width: "33rem", marginTop: "4rem" }}>
            <Uploader />
            <Button className="validate-btn" type="submit">
              validate
            </Button>
          </div>
        </Center>
      </Container>
    </>
  );
}
