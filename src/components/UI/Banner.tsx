import styled from "styled-components";

const size = {
  mobile: "320px",
  tablet: "768px",
  laptop: "1024px",
  laptopM: "1440px",
  desktop: "1920px",
  ultrawide: "2560px",
};

const BannerContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  @media screen and (min-width: ${size.tablet}) {
    width: 70%;
  }
  @media screen and (min-width: ${size.laptop}) {
    width: 80%;
  }
  @media screen and (min-width: ${size.laptopM}) {
    width: 90%;
  }
  @media screen and (min-width: ${size.desktop}) {
    width: 90%;
  }
  @media screen and (min-width: ${size.ultrawide}) {
    width: 100%;
  }
`;

const Title = styled.h2`
  font-size: 32px;
  font-weight: 600;
  font-family: sans-serif;
  background: linear-gradient(90deg, #66785f, #4b5945);
  background-size: 200%;
  background-position: left;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  transition: background-position 0.5s ease;

  &:hover {
    background-position: right;
  }
`;

const Text = styled.p`
  text-align: center;
`;

const Banner = () => {
  return (
    <BannerContainer>
      <Title>Encurte seus Links</Title>
      <Text>
        Crie links curtos e personalizáveis de maneira prática e que são fáceis
        de compartilhar!
      </Text>
    </BannerContainer>
  );
};

export default Banner;
