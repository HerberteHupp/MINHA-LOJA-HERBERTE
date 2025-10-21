// importando o hook de criar o contexto

import { createContext,useState , useEffect } from "react";

//Criando o contexto de autorização
export const AuthContext = createContext()


//Cria o provider do contexto
// Provider = Fornece as informações para os componentes filhos

export const AuthProvider = ({ children }) => {


     //State pra guardar o nome do usuário
    const[usuarioNome , setUsuarioNome] = useState ("")


    // Quando o componente é renderizado,pega o nome do localStorage
    useEffect (()=>{
        const nomeAtual = localStorage.getItem ("userName")  || "Visitante"
        setUsuarioNome (nomeAtual)

    },[])

   // função para receber as informações de login , e guardar no localStorage  
    const login = (data) => {
          console.log("usuáriologado:",data)
            localStorage.setItem ("id",data.id)
            localStorage.setItem ("userName",data.nome)
            localStorage.setItem ("email",data.email)
            localStorage.setItem ("imagemPerfil",data.imagemurl)
            setUsuarioNome (data.nome)


}


   // Função pra remover as informações login do localStorage e redefinir o nome de usuário Visitante 
    const logout = () => {
        localStorage.clear()
        setUsuarioNome ("Visitante")

    }

    // retorna o provider fornecendo os dados do usuário , login e logout
    return (
        <AuthContext.Provider value ={{ usuarioNome , login , logout }}>
            { children }
        </AuthContext.Provider>
    )
}