import Layout from '../components/template/Layout'
import useAppData from '../data/hook/useAppData'

export default function Ajustes() {
  const { alternarTema } = useAppData()

  return (
    <Layout titulo="Configurações" subtitulo="Modifique as suas preferências">
      <h3>Ajustes Gerais</h3>
      <button onClick={alternarTema}>Alternar Tema</button>
    </Layout>
  )
}
