import styled from "styled-components";

interface Props {
    title: string
}

const TitleH3 = styled.h3`
    color: #020817;
    font-weight: 400;
    font-size: 16px;
`

const Title = ({title}: Props) => {
    return <TitleH3>{title}</TitleH3>
}

export default Title;