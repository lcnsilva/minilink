// LinkCard.tsx
import { toast, Zoom } from "react-toastify";
import styled from "styled-components";

const size = {
  mobile: "320px",
  tablet: "768px",
  laptop: "1024px",
  laptopM: "1440px",
  desktop: "1920px",
  ultrawide: "2560px",
};

const Card = styled.div`
  width: 80%;
  background: #fff;
  border-radius: 10px;
  padding: 32px 24px;
  margin: 40px auto;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  @media screen and (min-width: ${size.tablet}) {
    width: 60%;
  }
  @media screen and (min-width: ${size.laptop}) {
    width: 50%;
  }
  @media screen and (min-width: ${size.laptopM}) {
    width: 40%;
  }
  @media screen and (min-width: ${size.desktop}) {
    width: 30%;
  }
  @media screen and (min-width: ${size.ultrawide}) {
    width: 20%;
  }
`;

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 8px;
`;

const Subtitle = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 24px;
`;

const UrlBox = styled.div`
  background-color: #f5f7fa;
  border-radius: 8px;
  padding: 1rem;
  text-align: left;
  font-size: 14px;
  margin-bottom: 1.5rem;
  a {
    color: #4b5945;
    text-decoration: none;
    word-break: break-all;
  }

  p {
    margin-top: 0.5rem;
    color: #333;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  @media screen and (min-width: ${size.tablet}) {
    font-size: 16px;
  }
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  @media screen and (min-width: ${size.tablet}) {
    justify-content: space-between;
  }
`;

const Button = styled.button<{ variant?: "copy" }>`
  padding: 0.5rem 1rem;
  width: ${(props) => (props.variant === "copy" ? "60%" : "auto")};
  font-size: 14px;
  border-radius: 10px;
  cursor: pointer;
  border: ${(props) =>
    props.variant === "copy" ? "none" : "1px solid #66785F"};
  background-color: ${(props) =>
    props.variant === "copy" ? "#4B5945" : "#fff"};
  color: ${(props) => (props.variant === "copy" ? "#fff" : "#333")};
  &:hover {
    opacity: 0.9;
  }
  @media screen and (min-width: ${size.tablet}) {
    width: auto;
    padding: 1rem 1.5rem;
    font-size: 14px;
  }
  @media screen and (min-width: ${size.laptop}) {
    font-size: 16px;
  }
`;

const SvgIcon = styled.svg`
  width: 3.5rem;
  height: 3.5rem;
  fill: none;
  stroke: #4b5945;
  stroke-width: 2;
`;

interface Props {
  getShortUrl: string;
  getOriginalUrl: string;
  handleReset?: React.MouseEventHandler<HTMLButtonElement>;
}

const Success = ({ getShortUrl, getOriginalUrl, handleReset }: Props) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(getShortUrl);
    toast.info("Minilink copiado!", {
      transition: Zoom,
    });
  };

  return (
    <Card>
      <SvgIcon viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 14L8.5 15.5C6.01472 17.9853 2.01472 13.9853 4.5 11.5L6 10M14 10L15.5 8.5C17.9853 6.01472 21.9853 10.0147 19.5 12.5L18 14M8 12H16" />
      </SvgIcon>
      <Title>Seu Minilink está pronto!</Title>
      <Subtitle>Copie seu link para compartilhá-lo com outras pessoas</Subtitle>
      <UrlBox>
        <div>
          URL curta: <a href={getShortUrl}>{getShortUrl}</a>
        </div>
        <p>URL original: {getOriginalUrl}</p>
      </UrlBox>
      <ButtonRow>
        <Button variant="copy" onClick={handleCopy}>
          Copiar para Área de Transferência
        </Button>
        <Button onClick={handleReset}>Criar Novo Link</Button>
      </ButtonRow>
    </Card>
  );
};

export default Success;
