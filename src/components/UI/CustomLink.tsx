import styled from "styled-components";
import Title from "./Title";
import Label from "./Label";
import { InputErrorMessage } from "../../pages/Home/style";
import getCustomErrorMessage from "../../services/inputValidityList";
import { useState } from "react";

const CustomLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LinkInput = styled.input`
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  line-height: 1.5rem;
  padding: 0.5rem 2.5rem 0.5rem 0.5rem;
  &:focus {
    outline: none !important;
  }
`;

interface Props {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}
const CustomLink = ({ onChange }: Props) => {
  const [inputErrorMessage, setInputErrorMessage] = useState("");

  const handleInputValidation = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const message = getCustomErrorMessage(event.currentTarget);
    setInputErrorMessage(message);
  };

  return (
    <CustomLinkContainer>
      <Title title="Digite seu link personalizado:" />
      <LinkContainer>
        <Label text="mnlnk.me/" />
        <LinkInput
          type="text"
          placeholder="meu-link-personalizado"
          required
          onChange={(e) => onChange(e)}
          minLength={2}
          maxLength={16}
          onBlur={handleInputValidation}
          name="customUrl"
        />
      </LinkContainer>

      <InputErrorMessage>{inputErrorMessage}</InputErrorMessage>
    </CustomLinkContainer>
  );
};

export default CustomLink;