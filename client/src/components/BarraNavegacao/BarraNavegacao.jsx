//importando o css da barra de navegação
import styles from './BarraNavegacao.module.css';

import{Nav ,Navbar, NavDropdown , Image, Accordion } from 'react-bootstrap';


// Importando os links do router
import{ NavLink} from 'react-router-dom';



import { AuthContext } from '../../contexts/UserContext.jsx'
import { useContext } from "react";



//importando os icones
import {BsBoxes} from 'react-icons/bs'

const BarraNevegaçao =()=> {

// importando o nome de usuário logado e  função de logout
const { usuarioNome,logout } = useContext(AuthContext)

// Guarda o id usuário atual
const idAtualUsuario = localStorage.getItem("id");

// Guarda imagem do usuário atual//
const imagemAtual = localStorage.getItem("imagemPerfil");

//Imagem padrão//
const semImagem = "https://www.pngall.com/wp-content/uploads/5/Profile-PNG-High-Quality-Image.png";


  return (
    <div className= "d-flex flex-column flex-shrink-0 p-3 text-white bg-dark min-vh-100 max-vh-100"
     style={{width: "250px"}} >
      {/* Logo da barra de navegação */}

     <Navbar.Brand as ={NavLink} to="/home" className ="text-white mb-3">
      <BsBoxes className="fs-4"/>   

     </Navbar.Brand>
     <span className="fs-5 ms-2"> C&G Solutions</span>
       
      {/* Opções de Menu */}
      <Nav className= "flex-column mb-auto">


      {/* Opções home*/}
      <Nav.Link as={NavLink} to ="/home" className="text-white px-2">
      <BsBoxes className="fs-4"/>
      <span className="fs-5 ms-2">Home</span>  

      </Nav.Link>

      {/* Opções de Relatórios*/}
      <Nav.Link as={NavLink} to ="/relatorios" className="text-white px-2">
      <BsBoxes className="fs-4"/>
      <span className="fs-5 ms-2">Relatórios</span>  

      </Nav.Link>

      {/*Criando Arcodeon*/}
      <Accordion flush className='flex- column mb-auto'>

      {/* Páginas de Produtos*/}
      <Accordion.Item className="bg-dark text-white">
        <Accordion.Header className={styles.accordionHeader}>
          <BsBoxes className="fs-4"/>
          <span className="ms-2"> Produtos </span>

        </Accordion.Header>
        <Accordion.Body>
          <Nav className="flex-column">
            {/* Opção 1 */}
            <Nav.Link as={Nav.Link} to ="/produtos" className="text-white ps-2">

            <BsBoxes className="fs-5"/>
            <span className="ms-2"> Listar </span>
            
             </Nav.Link>
            {/* Opção 2 */}
            
            <Nav.Link as={Nav.Link} to ="/produtos/cadastrar" className="text-white ps-2">

            <BsBoxes className="fs-5"/>
            <span className="ms-2"> Adicionar </span>
            </Nav.Link>
            </Nav>
           </Accordion.Body>
          </Accordion.Item>
      
      {/*Criando Arcodeon*/}



      </Accordion>



      

      </Nav>


    Litte Hair</div>

  )

}


export default BarraNevegaçao