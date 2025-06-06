import styled from "styled-components";

const size = {
  mobile: "320px",
  tablet: "768px",
  laptop: "1024px",
  laptopM: "1440px",
  desktop: "1920px",
  ultrawide: "2560px",
};

export const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f8fafc;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  gap: 1rem;
`;

export const LinkContainer = styled.form`
  width: 80%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 1rem;
  border-radius: 0.5rem;
  @media screen and (min-width: ${size.tablet}) {
    width: 60%;
    padding: 1.5rem;
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
    padding: 2rem;
  }
`;

export const OptionsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0.5rem 0;
`;

export const OnlyNumberOptionContainer = styled.div`
  width: 100%;
  padding: 0.5rem 0;
`;

export const OnlyLetterOptionContainer = styled.div`
  width: 100%;
`;

export const LinkInput = styled.input`
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  line-height: 1.5rem;
  padding: 0.5rem 2.5rem 0.5rem 1rem;
  &:focus {
    outline: none !important;
  }
`;

export const InputErrorMessage = styled.label`
  color:red;
  font-size: 0.9rem;
  font-style: italic;
`;

export const SubmitButton = styled.button`
  width: 100%;
  appearance: button;
  backface-visibility: hidden;
  background-color: #4b5945;
  border-radius: 6px;
  border-width: 0;
  box-shadow: rgba(50, 50, 93, 0.1) 0 0 0 1px inset,
    rgba(50, 50, 93, 0.1) 0 2px 5px 0, rgba(0, 0, 0, 0.07) 0 1px 1px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-size: 100%;
  height: 44px;
  line-height: 1.15;
  margin: 12px 0 0;
  outline: none;
  overflow: hidden;
  padding: 0 25px;
  position: relative;
  text-align: center;
  text-transform: none;
  transform: translateZ(0);
  transition: all 0.2s, box-shadow 0.08s ease-in;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:disabled {
    cursor: default;
  }
  &:focus {
    box-shadow: rgba(50, 50, 93, 0.1) 0 0 0 1px inset,
      rgba(50, 50, 93, 0.2) 0 6px 15px 0, rgba(0, 0, 0, 0.1) 0 2px 2px 0,
      rgba(50, 151, 211, 0.3) 0 0 0 4px;
  }
`;
