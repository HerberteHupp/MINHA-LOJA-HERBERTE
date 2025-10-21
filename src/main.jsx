import './index.css'

import { createRoot } from "react-dom/client"
import { StrictMode } from 'react'

// Provedor de rotas, do react-router
import { RouterProvider } from 'react-router-dom'

// Meu gerenciador de rotas
import MyRouter from "./MyRouter.jsx"

// Importação do Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';


//importar o provedor do contexto de de usuário
import { AuthProvider } from "./contexts/UserContext"

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <AuthProvider>
      {/* fornece as informações de contexto pra toda aplicação}
      {/* Faz o provedor utilizar as rotas que você definiu no MyRouter */}
      <RouterProvider router={MyRouter} />

    </AuthProvider>


  </StrictMode>,
)
