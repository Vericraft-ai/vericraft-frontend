import Image, { StaticImageData } from "next/image";
import styled from "styled-components";

export const Card = styled.div`
  border-radius: 1rem;
  position: relative;
  width: 396px;
  height: 456px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 300px;
    height: 350px;
  }

  img {
    object-fit: cover;
    border-radius: 1rem;
  }

  .overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(0, 0, 0, 0.82) 93.75%
    );
    border-radius: 0 0 1rem 1rem;
  }

  .footer {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    color: #fff;
    font-weight: 400;
    padding: 0.63rem;
    line-height: 1.25rem;
    h3 {
      font-weight: 700;
      margin-bottom: 0.75rem;
    }
  }
`;

type Props = {
  src: string | StaticImageData;
  alt?: string;
};

export const DiscoverCard = ({ src, alt }: Props) => {
  return (
    <Card>
      <Image src={src} alt={alt || "robot"} fill />
      <div className="overlay" />
      <div className="footer">
        <h3>Overpopulated ASM Rain</h3>
        <p>Floor: 0.57ETH</p>
      </div>
    </Card>
  );
};
