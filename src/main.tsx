import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import App from './App.tsx'

const redirect = sessionStorage.getItem("redirect");
sessionStorage.removeItem("redirect");

if (redirect && redirect !== location.pathname) {
  history.replaceState(null, "", redirect);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)