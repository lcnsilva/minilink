import styled from "styled-components";

interface Props {
    text: string
}

const LabelStyled = styled.label`
    font-size: 14px;
    font-weight: 400;
    color: #64748B;
`

const Label = ({text}: Props) => {
    return (
        <LabelStyled>{text}</LabelStyled>
    )
}

export default Label;