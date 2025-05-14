import styled from "styled-components";

const BannerContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    width: 80%;
`

const Title = styled.h2`
    font-size: 32px;
    font-weight: 600;
    font-family: sans-serif;
    background: linear-gradient(90deg, #3b82f6, #1d4ed8); // azul médio → escuro
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
`

const Text = styled.p`
    text-align: center;
`


const Banner = () => {
    return(
        <BannerContainer>
            <Title>Encurte seus Links</Title>
            <Text>Crie links curtos e personalizáveis de maneira prática e que são fáceis de compartilhar!</Text>
        </BannerContainer>
    )
}

export default Banner;