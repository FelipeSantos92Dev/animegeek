import Layout from '../components/template/Layout'
import useSWR from 'swr'
import api from '../../utils/api'
import { TicketIconSell, UserIconDash } from '../components/icons'

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
      {/* <p>Código do ingresso: {data?.data.codigo}</p>
      <p>Validade do ingresso: {data?.data.validade}</p>
      <p>Autenticações permitidas: {data?.data.autenticacao}</p> */}
      <div className="mt-4 md:flex">
        <div className="m-4 flex cursor-pointer items-center justify-around rounded-xl bg-red-200 p-4 shadow-lg lg:w-1/3">
          {/* <img src="https://i.imgur.com/VHc5SJE.png" alt="" /> */}
          {TicketIconSell}
          <div className="text-center">
            <h1 className=" font-bold text-gray-800 sm:text-xl lg:text-2xl">
              R$ 30
            </h1>
            <span className="text-gray-500">1º Dia</span>
          </div>
        </div>

        <div className="m-4 flex cursor-pointer items-center justify-around rounded-xl bg-blue-200 p-4 shadow-lg lg:w-1/3">
          {/* <img src="https://i.imgur.com/VHc5SJE.png" alt="" /> */}
          {TicketIconSell}
          <div className="text-center">
            <h1 className=" font-bold text-gray-800 sm:text-xl lg:text-2xl">
              R$ 30
            </h1>
            <span className="text-gray-500">2º Dia</span>
          </div>
        </div>

        <div className="m-4 flex cursor-pointer items-center justify-around rounded-xl bg-green-200 p-4 shadow-lg lg:w-1/3">
          {/* <img src="https://i.imgur.com/VHc5SJE.png" alt="" /> */}
          {TicketIconSell}
          <div className="text-center">
            <h1 className=" font-bold text-gray-800 sm:text-xl lg:text-2xl">
              R$ 50
            </h1>
            <span className="text-gray-500">Combo</span>
          </div>
        </div>
      </div>
    </Layout>
  )
}
