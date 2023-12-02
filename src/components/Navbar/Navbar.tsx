import { Button } from "@ensdomains/thorin";
import Link from "next/link";
import styled from "styled-components";
import { Logo } from "../Icons/Logo";
import { UserIcon } from "../Icons/UserIcon";
import { WalletIcon } from "../Icons/WalletIcon";

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

export const Navbar = ({ showLogo, sticky, showProfile }: Props) => {
  return (
    <NavContainer sticky={sticky}>
      {showLogo && <Logo />}
      <div>
        {showProfile && (
          <Button colorStyle="greySecondary">
            <UserIcon />
          </Button>
        )}
        <Link href="/login">
          <Button colorStyle="greySecondary">
            <WalletIcon />
            <span>login</span>
          </Button>
        </Link>
        <Link href="/">
          <Button colorStyle="greySecondary">get started</Button>
        </Link>
      </div>
    </NavContainer>
  );
};
