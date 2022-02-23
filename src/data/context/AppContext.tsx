import {
  createContext,
  ReactChild,
  ReactFragment,
  ReactPortal,
  useEffect,
  useState,
} from 'react'

// type Tema = 'dark' | ''

interface AppContextProps {
  tema?: string
  alternarTema?: () => void
}

const AppContext = createContext<AppContextProps>({})

export function AppProvider(props: {
  children:
    | boolean
    | ReactChild
    | ReactFragment
    | ReactPortal
    | null
    | undefined
}) {
  const [tema, setTema] = useState('')

  function alternarTema() {
    const novoTema = tema === '' ? 'dark' : ''
    setTema(novoTema)
    localStorage.setItem('tema', novoTema)
  }

  useEffect(() => {
    const temaSalvo = localStorage.getItem('tema')
    setTema(temaSalvo)
  }, [])

  return (
    <AppContext.Provider
      value={{
        tema,
        alternarTema,
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}

export default AppContext
