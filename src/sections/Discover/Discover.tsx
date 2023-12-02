import { DiscoverCard } from "@/components/DiscoverCard";
import { Center, Row } from "@/components/Layout";
import { Button } from "@ensdomains/thorin";
import styled from "styled-components";

const DiscoverContainer = styled.div`
  background: #1e2122;
  padding: 4rem 1rem;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }

  h1 {
    color: #fff;
    font-size: 2.25rem;
    font-weight: 400;
    line-height: 1.25rem;

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }
`;

export const Discover = () => {
  return (
    <DiscoverContainer>
      <h1>discover popular assets.</h1>

      <div>
        <Row>
          <DiscoverCard src="/images/unsplash1.png" />
          <DiscoverCard src="/images/unsplash2.png" />
          <DiscoverCard src="/images/unsplash1.png" />
          <DiscoverCard src="/images/unsplash2.png" />
        </Row>

        <Row>
          <DiscoverCard src="/images/unsplash1.png" />
          <DiscoverCard src="/images/unsplash2.png" />
          <DiscoverCard src="/images/unsplash1.png" />
          <DiscoverCard src="/images/unsplash2.png" />
        </Row>

        <Row>
          <DiscoverCard src="/images/unsplash1.png" />
          <DiscoverCard src="/images/unsplash2.png" />
          <DiscoverCard src="/images/unsplash1.png" />
          <DiscoverCard src="/images/unsplash2.png" />
        </Row>

        <Center>
          <Button width="fit" colorStyle="background">
            view more
          </Button>
        </Center>
      </div>
    </DiscoverContainer>
  );
};
