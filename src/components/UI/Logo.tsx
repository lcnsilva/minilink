import styled from "styled-components";

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0.25rem 0.5rem;
  user-select: none;
`;

const GradientText = styled.span`
  font-size: 32px;
  font-weight: 600;
  font-family: sans-serif;
  background: linear-gradient(90deg, #66785F, #4B5945);
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

const ClickableContainer = styled.a`
  text-decoration: none;
`


const SvgIcon = styled.svg`
  width: 2.5rem;
  height: 2.5rem;
  fill: none;
  stroke: #66785F;
  stroke-width: 2;
`;

const Logo = () => {
  return (
    <ClickableContainer href="/">
      <LogoContainer>
        <SvgIcon viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 14L8.5 15.5C6.01472 17.9853 2.01472 13.9853 4.5 11.5L6 10M14 10L15.5 8.5C17.9853 6.01472 21.9853 10.0147 19.5 12.5L18 14M8 12H16" />
        </SvgIcon>      
        <GradientText>Minilink</GradientText>
      </LogoContainer>
    </ClickableContainer>
    
  );
};

export default Logo;
