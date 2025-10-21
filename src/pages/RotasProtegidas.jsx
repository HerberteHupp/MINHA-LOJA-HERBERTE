// Importação do navigate pra transitar entre páginas
// Importando o outlet, do REA
import { Outlet, Navigate } from "react-router-dom"

// Importação dos componentes do bootstrap
import Container from "react-bootstrap/Container"


//importar as informações do contexto autenticação de usuário//
import { AuthContext } from "../contexts/UserContext.jsx"
import { useContext } from "react"


const RotasProtegidas = () => {



  const { usuarioNome } = useContext(AuthContext)

   if(!usuárioNome=="Visitante"){
    return <Navigate to="/login"/>
  }

  // Variável para saber se está logado ou não
  //const estaLogado = true
  // Se não tiver, joga pra tela de login


  return (
    <div className="App d-flex">
     {/* Barra de navegação fixa na lateral */}
     <div className="position-fixed top-0 start-0 min-vh-100 bg-danger">
        <h1>usuário logado:</h1>
        <h1>{usuárioNome}</h1>
     </div>
     {/* Conteúdo principal, dependendo de qual rota está */}
     <div className="d-flex flex-column min-vh-100 flex-grow-1 p-2 justify-content-center"
          style={{marginLeft:"350px"}}>
        <Container fluid>
          <h1>Conteúdo principal</h1>
        </Container>
      </div> 
    </div>
  )
}

export default RotasProtegidas