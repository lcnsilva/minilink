import { useNavigate } from "react-router";
import styled from "styled-components";
import Logo from "../../components/UI/Logo";
import iconNotFoundCat from "../../assets/404_cat.jpg";

const size = {
  mobile: "320px",
  tablet: "768px",
  laptop: "1024px",
  laptopM: "1440px",
  desktop: "1920px",
  ultrawide: "2560px",
};


const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: #f9fbfc;
`;

const NotFoundContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  color: #2f3e2f;
  margin: 1rem 0;
  text-align: center;
  word-wrap: break-word;
`;

const Description = styled.p`
  color: #666;
  margin: 1rem 0 2rem;
  text-align: center;
  max-width: 400px;
`;

const Button = styled.button`
  padding: 0.75rem 2rem;
  background-color: #2f3e2f;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    background-color: #445a44;
  }
`;

const NotFoundIcon = styled.img`
  width: 100%;
  height: auto;
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
    width: 25%;
  }
`;

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Logo />
      <NotFoundContainer>
        <Subtitle>Link não encontrado</Subtitle>
        <NotFoundIcon src={iconNotFoundCat} />
        <Description>
          O link que você tentou acessar não existe ou já expirou. Verifique se
          ele está correto ou volte à página inicial.
        </Description>
        <Button onClick={() => navigate("/")}>Voltar para o início</Button>
      </NotFoundContainer>
    </Container>
  );
};

export default NotFound;
