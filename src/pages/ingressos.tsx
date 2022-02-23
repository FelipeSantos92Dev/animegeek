import Layout from '../components/template/Layout'
import useSWR from 'swr'
import api from '../../utils/api'

export default function Ingressos() {
  const ticket = 20227436
  const { data, error } = useSWR(`/api/ticket/${ticket}`, api)

  if (error) {
    console.log(error)
  }

  if (data) {
    console.log(data)
  }

  return (
    <Layout
      titulo="Gerenciamento de Ingressos"
      subtitulo="Tipo e emissão de ingressos"
    >
      <h3>Ingressos AnimeGeek</h3>
      <p>Código do ingresso: {data?.data.codigo}</p>
      <p>Validade do ingresso: {data?.data.validade}</p>
      <p>Autenticações permitidas: {data?.data.autenticacao}</p>
    </Layout>
  )
}
