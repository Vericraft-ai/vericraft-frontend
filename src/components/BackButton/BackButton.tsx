import { Button } from "@ensdomains/thorin";
import { useRouter } from "next/router";
import styled from "styled-components";
import { ChevronLeft } from "../Icons/ChevronLeft";

const Wrapper = styled.div`
  @apply absolute top-4 left-4 z-50;

  button {
    @apply w-14 h-14 rounded-4;

    @screen (max-width: 768px) {
      @apply w-12 h-12;

      svg {
        @apply w-4 h-4;
      }
    }
  }
`;

export const BackButton = () => {
  const router = useRouter();

  return (
    <Wrapper>
      <Button
        shape="square"
        onClick={() => router.back()}
        colorStyle="greySecondary"
      >
        <ChevronLeft />
      </Button>
    </Wrapper>
  );
};
