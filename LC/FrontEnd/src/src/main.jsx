import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { UsuarioProvider } from './context/UsuarioContext.jsx'
import { TemaProvider } from './context/TemaContext.jsx'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Carrinho from './pages/Carrinho.jsx'

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/carrinho', element: <Carrinho /> }
    ]
  }
])

createRoot(document.getElementById('root')).render(

  <TemaProvider>
    <UsuarioProvider>
      <RouterProvider router={router} />
    </UsuarioProvider>,
  </TemaProvider>
)
