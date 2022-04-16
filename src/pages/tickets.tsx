import Layout from '../components/template/Layout'
import { TicketIconSell } from '../components/icons'
import { FormEvent } from 'react'
import axios from 'axios'

async function createTckt(event: FormEvent) {
  event.preventDefault()
  await axios.post('/api/tickets')
  alert('Ingresso Gerado!')
}

export default function Ingressos() {
  return (
    <Layout
      titulo="Gerenciamento de Ingressos"
      subtitulo="Tipo e emissão de ingressos"
    >
      <h3>Ingressos AnimeGeek</h3>
      <div className="mt-4 md:flex">
        <div
          className={`
          m-2 flex cursor-pointer items-center
          justify-around rounded-xl bg-blue-200
          p-2 shadow-lg dark:text-gray-900 lg:w-1/3`}
          onClick={createTckt}
        >
          {TicketIconSell}
          <div className="text-center">
            <h1 className=" font-bold text-gray-800 sm:text-xl lg:text-2xl">
              R$ 25
            </h1>
            <span className="text-gray-500">1º Dia</span>
          </div>
        </div>
      </div>
    </Layout>
  )
}
