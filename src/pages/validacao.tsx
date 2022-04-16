import axios from 'axios'
import { GetServerSideProps } from 'next'
import { FormEvent, useState } from 'react'
import Layout from '../components/template/Layout'

type Props = {
  data: Array<any>
}

// const url = 'https://animegeek.vercel.app/api/tickets'
const url = 'http://localhost:3000/api/tickets'

export default function Validacao(props: Props) {
  const { data } = props
  const [ticketCode, setTicketCode] = useState('')
  const validate = async (event: FormEvent) => {
    event.preventDefault()

    await axios
      .put(url, { id: ticketCode })
      .then((response) => alert(response.data.message))
  }

  return (
    <Layout titulo="Autenticação dos Ingressos" subtitulo="Entrada no evento">
      <h3>Leitura do QR Code</h3>

      <div className="mt-4">
        <form>
          <input
            id="validator"
            required
            className={`
              w-80 rounded-md border bg-gray-200 px-2 py-1 text-gray-800
              focus:border-blue-500 focus:bg-white focus:outline-none
            `}
            type="text"
            value={ticketCode}
            onChange={(e) => setTicketCode(e.currentTarget.value)}
          />
          <button
            onClick={validate}
            className="ml-2 rounded-md bg-blue-500 px-2 py-1 font-semibold text-white"
          >
            Validar
          </button>
        </form>
      </div>
      <div
        className={`
          mt-10
        `}
      >
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
            <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  QR Code
                </th>
                <th scope="col" className="px-6 py-3">
                  Código
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Preço
                </th>
              </tr>
            </thead>

            <tbody>
              {data.map((index) => (
                <tr
                  key={index.id}
                  className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                  >
                    {index.id}
                  </th>
                  <td className="px-6 py-4">{index.code}</td>
                  <td className="px-6 py-4">{index.status}</td>
                  <td className="px-6 py-4">R$ {index.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await axios.get(url)

  return {
    props: {
      data,
    },
  }
}
