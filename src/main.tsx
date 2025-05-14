import { createRoot } from 'react-dom/client'
import './styles/GlobalStyle.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
