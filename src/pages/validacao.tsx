import axios from 'axios'
import { FormEvent, useState } from 'react'
import Layout from '../components/template/Layout'

export default function Validacao() {
  const [code, setCode] = useState('')

  const validate = async (event: FormEvent) => {
    event.preventDefault()
    const url = 'http://localhost:3000/api/tickets'
    await axios
      .put(url, { id: code })
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
            value={code}
            onChange={(e) => setCode(e.currentTarget.value)}
          />
          <button
            onClick={validate}
            className="ml-2 rounded-md bg-blue-500 px-2 py-1 font-semibold text-white"
          >
            Validar
          </button>
        </form>
      </div>
    </Layout>
  )
}
