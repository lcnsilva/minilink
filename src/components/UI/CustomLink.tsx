import styled from "styled-components";
import Title from "./Title";
import Label from "./Label";

const CustomLinkContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`

const LinkContainer = styled.div`
    display: flex;
    align-items: center;
`

const LinkInput = styled.input`
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  line-height: 1.5rem;
  padding: 0.5rem 2.5rem 0.5rem 0.5rem;
  &:focus{
    outline: none !important;
    border: solid 1px #2463eb;
    box-shadow: 0 0 10px #719ECE;   
  }
`;

interface Props {
    onChange: React.ChangeEventHandler<HTMLInputElement>
}
const CustomLink = ({onChange}: Props) => {
    return (
        <CustomLinkContainer>
            <Title title="Digite seu link personalizado:"/>
            <LinkContainer>
                <Label text="mnlnk.me/"/>
                <LinkInput 
                type="text" 
                placeholder="meu-link-personalizado" 
                required onChange={(e) => onChange(e)}
                minLength={2}
                maxLength={16}
                />
            </LinkContainer>        
        </CustomLinkContainer>
    )
}

export default CustomLink;