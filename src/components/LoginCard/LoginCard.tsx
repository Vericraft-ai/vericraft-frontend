import { RightChevronSVG } from "@ensdomains/thorin";
import Link from "next/link";
import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.colors.background};
  padding: 1rem;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.5rem;
  border: 1px solid ${(props) => props.theme.colors.border};
  width: 100%;
  gap: 1rem;

  .col-1 {
    display: flex;
    flex-direction: column;
    gap: 0.625rem;

    div {
      display: flex;
      align-items: center;
      gap: 0.75rem;

      span {
        font-size: 0.875rem;
      }
    }

    p {
      font-size: 0.75rem;
      font-weight: 300;
    }
  }
`;

type LoginCardProps = {
  title: string;
  description: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  link: string;
};

export const LoginCard = ({
  title,
  description,
  Icon,
  link,
}: LoginCardProps) => {
  return (
    <CardContainer as={Link} href={link}>
      <div className="col-1">
        <div>
          <Icon />
          <span>{title}</span>
        </div>
        <p>{description}</p>
      </div>
      <RightChevronSVG className="col-2" />
    </CardContainer>
  );
};
