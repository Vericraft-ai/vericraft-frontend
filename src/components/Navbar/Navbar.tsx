import { Button } from "@ensdomains/thorin";
import Link from "next/link";
import styled from "styled-components";
import { Logo } from "../Icons/Logo";
import { WalletIcon } from "../Icons/WalletIcon";
import { useWeb3Modal, useWeb3ModalAccount } from "@web3modal/ethers/react";
import { useEffect, useState } from "react";

const NavContainer = styled.nav<{ sticky?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  position: ${(props) => (props.sticky ? "sticky" : "absolute")};
  top: 0;
  right: 0;
  z-index: 100;
  transition: all 0.2s ease-in-out;
  @media (max-width: 768px) {
    padding: 1rem;
  }

  button {
    font-weight: 400;
    color: ${(props) => props.theme.colors.text};
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;

    svg {
      width: 20px;
      height: 20px;
    }
  }

  &.sticky {
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  }

  & > div {
    margin-left: auto;
  }
`;

type Props = {
  showLogo?: boolean;
  sticky?: boolean;
  showProfile?: boolean;
};

export const Navbar = ({ showLogo, sticky }: Props) => {
  const { open } = useWeb3Modal();
  const [isClient, setIsClient] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { address, isConnected } = useWeb3ModalAccount();

  useEffect(() => {
    setIsClient(true);

    if (isConnected !== undefined) {
      setIsLoading(false);
    }
  }, [isConnected]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const truncatedAddress = address
    ? `${address?.slice(0, 4)}...${address?.slice(-2)}`
    : "connect";

  const getStarted = () => {
    if (isConnected) {
      return (
        <Link href="/dashboard">
          <Button colorStyle="greySecondary">dashboard</Button>
        </Link>
      );
    } else {
      return (
        <Button colorStyle="greySecondary" onClick={() => open()}>
          get started
        </Button>
      );
    }
  };

  return (
    <NavContainer sticky={sticky}>
      {showLogo && <Logo />}
      <div>
        {isConnected && (
          <Button colorStyle="greySecondary" onClick={() => open()}>
            {isClient && <WalletIcon />}
            <span>{truncatedAddress}</span>
          </Button>
        )}

        {getStarted()}
      </div>
    </NavContainer>
  );
};
