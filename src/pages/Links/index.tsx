import styled from "styled-components";
import Table from "../../components/UI/Table";
import Logo from "../../components/UI/Logo";
import Footer from "../../components/UI/Footer";

const size = {
  mobile: "320px",
  tablet: "768px",
  laptop: "1024px",
  laptopM: "1440px",
  desktop: "1920px",
  ultrawide: "2560px",
};

const LinksContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f8fafc;
`;

const TableContainer = styled.div`
  overflow: auto;

  width: 100%;
  @media screen and (min-width: ${size.tablet}) {
    width: 90%;
  }
  @media screen and (min-width: ${size.laptop}) {
    width: 80%;
  }
  @media screen and (min-width: ${size.laptopM}) {
    width: 70%;
  }
  @media screen and (min-width: ${size.desktop}) {
    width: 60%;
  }
  @media screen and (min-width: ${size.ultrawide}) {
    width: 55%;
  }
`;

const Subtitle = styled.h2`
    font-size: 1.5rem;
  color: #2f3e2f;
  margin: 1rem 0;
  text-align: center;
  word-wrap: break-word;
`;

const Links = () => {
  return (
    <LinksContainer>
      <Logo />
      <Subtitle>Lista de Links</Subtitle>
      <TableContainer>
        <Table />
      </TableContainer>
      <Footer/>
    </LinksContainer>
  );
};

export default Links;
