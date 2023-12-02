import { BackButton } from "@/components/BackButton";
import { Navbar } from "@/components/Navbar";
import { Uploader } from "@/components/Uploader";
import {
  Button,
  Input,
  MagnifyingGlassSimpleSVG,
  Textarea,
} from "@ensdomains/thorin";
import Head from "next/head";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 0 10.06rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  gap: 4rem;
  margin: 9.5rem 0 4rem 0;

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 7rem 0 2rem 0;
  }
`;

export const Col1 = styled.div`
  height: 100%;
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }

  & > div {
    width: 100%;
  }

  .or {
    text-align: center;
    font-weight: 300;
    font-size: 1.5rem;
    margin: 3rem 0;

    @media (max-width: 768px) {
      margin: 2rem 0;
    }
  }
`;

const Col2 = styled.div`
  height: 100%;
  background-color: ${(props) => props.theme.colors.background};
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }

  & > form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 3rem;

    label > div {
      font-weight: 700;
      color: #1e2122;

   
    }
  }

  button {
    background: #000;
  }
`;

export default function GenerateNfts() {
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

        <Row>
          <Col1>
            <div>
              <Input
                icon={<MagnifyingGlassSimpleSVG />}
                label=""
                placeholder="generate nft with ai"
              />

              <div className="or">OR</div>

              <Uploader />
            </div>
          </Col1>

          <Col2>
            <form>
              <Input label="name" placeholder="name your nft" />
              <Input label="supply" placeholder="name your nft" />
              <Input
                label="external link"
                placeholder="https://opensea.io/item/23"
              />
              <Textarea label="description" placeholder="Content" />

              <Button type="submit">create</Button>
            </form>
          </Col2>
        </Row>
      </Container>
    </>
  );
}