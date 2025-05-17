import { createRoot } from 'react-dom/client'
import './styles/GlobalStyle.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Links from './pages/Links'

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
