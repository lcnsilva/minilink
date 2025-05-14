// LinkCard.tsx
import { toast, Zoom } from 'react-toastify';
import styled from 'styled-components';

const Card = styled.div`
  max-width: 500px;
  background: #fff;
  border-radius: 10px;
  padding: 32px 24px;
  margin: 40px auto;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 8px;
`;

const Subtitle = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 24px;
`;

const UrlBox = styled.div`
  background-color: #f5f7fa;
  border-radius: 8px;
  padding: 16px;
  text-align: left;
  font-size: 14px;
  margin-bottom: 24px;

  a {
    color: #4680ff;
    text-decoration: none;
    word-break: break-all;
  }

  p {
    margin-top: 8px;
    color: #333;
  }
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
`;

const Button = styled.button<{ variant?: 'copy' }>`
  padding: 10px 20px;
  font-size: 14px;
  border-radius: 6px;
  cursor: pointer;
  border: ${(props) =>
    props.variant === 'copy' ? 'none' : '1px solid #ccc'};
  background-color: ${(props) =>
    props.variant === 'copy' ? '#4680ff' : '#fff'};
  color: ${(props) =>
    props.variant === 'copy' ? '#fff' : '#333'};

  &:hover {
    opacity: 0.9;
  }
`;

const SvgIcon = styled.svg`
  width: 3.5rem;
  height: 3.5rem;
  fill: none;
  stroke: #3b82f6;
  stroke-width: 2;
`;

interface Props {
    getShortUrl: string,
    getOriginalUrl: string,
    handleReset? : React.MouseEventHandler<HTMLButtonElement>
}

const Success = ({getShortUrl, getOriginalUrl, handleReset}: Props) => {

    const handleCopy = () => {
        navigator.clipboard.writeText(getShortUrl)
        toast.info('Minilink copiado!', {
            transition: Zoom            
        })
    }

  return (
    <Card>
        <SvgIcon viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 14L8.5 15.5C6.01472 17.9853 2.01472 13.9853 4.5 11.5L6 10M14 10L15.5 8.5C17.9853 6.01472 21.9853 10.0147 19.5 12.5L18 14M8 12H16" />
        </SvgIcon>       
        <Title>Seu Minilink está pronto!</Title>
      <Subtitle>Copie seu link para compartilhá-lo com outras pessoas</Subtitle>
      <UrlBox>
        <div>
          URL curta: <a href={getShortUrl}>{getShortUrl}</a>
        </div>
        <p>URL original: {getOriginalUrl}</p>
      </UrlBox>
      <ButtonRow>
        <Button variant="copy" onClick={handleCopy}>Copiar para Área de Transferência</Button>
        <Button onClick={handleReset}>Criar Novo Link</Button>
      </ButtonRow>
    </Card>
  );
};

export default Success;
