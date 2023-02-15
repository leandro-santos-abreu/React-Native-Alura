import { createContext, useState } from 'react'

export const AutenticacaoContext = createContext({})

export function AutenticacaoProvider( {children} ) {
  const [usuario, setUsuario] = useState({})

  function login(email, senha){
    if(email == 'leandro@email.com' &&
      senha == 123
    ){
      setUsuario({
        nome: 'Leandro',
        email: email,
        endereco: 'Rua dos Loucos, 13',
        telefone: '+55 (11) 99999-9999'
      })
      return 'ok'
    }
    else {
      return 'Email ou senha incorretos'
    }
  }

  return (
    <AutenticacaoContext.Provider value={{
      login,
      usuario
    }}>
      {children}
    </AutenticacaoContext.Provider>
  )
}