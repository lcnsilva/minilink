import { createRoot } from 'react-dom/client'
import './styles/GlobalStyle.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Links from './pages/Links'

  //criar onsubmit e usar toastify para verificação de erros - done

  //fazer um componente para indicar sucesso ao criar link e mostrar o link criado
  //e o original, junto com opção de copiar para o ctrl+c e
  // uma outra opção de criar um link novo. - done

  //aplicar função para limpar após clicar em criar novo link - done

  //CRIAR TELA DE NOTFOUND E REDIRECIONAR DO BACK PARA ESSA TELA.
  //ajustar responsividade e dar toques finais
  //fazer função para ler o numero de cliques no link - exige login
  //MAS irei ignorar as boas práticas e farei um list com todos os links para
  //qualquer um poder ver os links já criados e quantos cliques tem
  //organizando pelo link com mais cliques
  //ver warning na props do success

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notfound" element={<NotFound/>}/>
        <Route path="/links" element={<Links/>}/>
        <Route path="*" element={<Navigate to="/" replace/>}/>
      </Routes>
    </BrowserRouter>
  )
