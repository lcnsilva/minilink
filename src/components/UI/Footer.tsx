import styled from "styled-components";
import GitHubIcon from '../../assets/github-mark-white.png'
import LinkedinIcon from '../../assets/InBug-White.png'

const FooterContainer = styled.footer`
    width: 100%;
  background-color: #2f3e2f;
  color: #ffffff;
  padding: 0.75rem 0;
  text-align: center;
  margin-top: auto;
`;

const FooterText = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  font-size: 0.9rem;
`;

const Link = styled.a`
cursor: pointer;
  &:hover {
    color: #b9d8b9;
  }
`;

const Icon = styled.img`
    width: 30px;
    height: auto;
`

const IconContainer = styled.div`
    justify-content: center;
    align-items: center;
  display: flex;
  gap: 0.5rem;
`

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        Desenvolvido por Luciano Silva. 
        <IconContainer>
            <Link href="https://www.linkedin.com/in/lcnsilva/"><Icon src={LinkedinIcon} alt="Linkedin"/></Link> 
            <Link href="https://github.com/lcnsilva"><Icon src={GitHubIcon} alt="Github"/></Link>
        </IconContainer>
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
