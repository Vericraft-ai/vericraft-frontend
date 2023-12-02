import styled from "styled-components";
import { Spiral } from "../../components/Icons/Spiral";
import Image from "next/image";
import { Button } from "@ensdomains/thorin";
import { Center } from "../../components/Layout";

export const StyledHero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 4rem;
  padding: 4rem 1rem;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }

  button {
    background: black;
    color: white;
    width: fit-content;

    &:hover {
      background: black;
      color: white;
      opacity: 0.9;
    }
  }
`;

const GenerateNftsWrapper = styled.div`
  width: 22.5rem;
  position: relative;

  @media (max-width: 768px) {
    width: 21.5rem;
  }

  h1 {
    font-weight: 300;
    font-size: 6rem;
    line-height: 7rem;
    margin: 0;

    @media (max-width: 768px) {
      font-size: 4rem;
      line-height: 5rem;
    }

    span {
      font-weight: 400;
    }
  }

  svg {
    position: absolute;
    top: 95px;
    right: 32px;

    @media (max-width: 768px) {
      top: 70px;
      right: 75px;
      width: 47px;
      height: 74px;
    }
  }
`;

export const Hero = () => {
  return (
    <StyledHero>
      <GenerateNftsWrapper>
        <h1>
          generate <span>nfts</span>
        </h1>
        <Spiral />
      </GenerateNftsWrapper>

      <Image
        src="/images/hero.png"
        alt="Hero Illustration"
        width={332}
        height={288}
      />

      <Center>
        <Button>get started</Button>
      </Center>
    </StyledHero>
  );
};
