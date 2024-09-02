import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyles } from './styles/GlobalStyles'
import Home from './pages/home/index'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
    <GlobalStyles />
  </StrictMode>,
)