import MenuLateral from './MenuLateral'
import Cabecalho from './Cabecalho'
import Conteudo from './Conteudo'
import useAppData from '../../data/hook/useAppData'

interface LayoutProps {
  titulo: string
  subtitulo: string
  children?: any
}

export default function Layout(props: LayoutProps) {
  const { tema, alternarTema } = useAppData()

  return (
    <div className={`${tema} flex h-screen w-screen`}>
      <MenuLateral />
      <div
        className={`
        flex w-full
        flex-col bg-gray-300
        py-3 px-7 dark:bg-gray-800
      `}
      >
        <Cabecalho titulo={props.titulo} subtitulo={props.subtitulo} />
        <Conteudo>{props.children}</Conteudo>
      </div>
    </div>
  )
}
