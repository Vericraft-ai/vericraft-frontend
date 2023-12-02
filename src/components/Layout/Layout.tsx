import styled from "styled-components";

export const Container = styled.div`
  background: ${(props) => props.theme.colors.background};
  width: 100%;
`;

export const Row = styled.div`
  display: flex;
  gap: 1.5rem;
  overflow-x: scroll;
  padding: 0.625rem;
  margin: 4rem 0;

  @media (max-width: 768px) {
    gap: 1rem;
    margin: 1.5rem 0;
  }

  &::-webkit-scrollbar {
    height: 0.5rem;
  }
`;

export const Center = styled.div<{ height?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Footer = styled.footer`
  padding: 4rem 0;
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 4rem;

  @media (max-width: 768px) {
    gap: 2rem;
    padding: 2rem 1rem;
  }

  h1 {
    text-align: center;
    font-size: 4rem;
    line-height: 5.5rem;
    letter-spacing: 0.08rem;
    font-weight: 300;
    width: 60%;

    @media (max-width: 768px) {
      font-size: 2rem;
      line-height: 3rem;
      width: 100%;
    }
  }

  div {
    display: flex;
    align-items: center;
    background: #f6f6f6;
    padding: 1.5rem;
    border-radius: 24px;
    gap: 1.5rem;

    a {
      line-height: 0;
    }
  }
`;
