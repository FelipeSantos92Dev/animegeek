import Layout from '../components/template/Layout'
import axios from 'axios'
import { GetServerSideProps } from 'next'

type Props = {
  sold: number
  validated: number
  cash: number
}

export default function Home(props: Props) {
  const { sold, validated, cash } = props
  return (
    <Layout titulo="Painel Administrativo" subtitulo="Dados gerais">
      <h3>Dashboard</h3>

      <div className="mt-4 md:flex">
        <div className="m-4 flex items-center justify-around rounded-xl bg-white shadow-lg lg:w-1/3">
          <img src="https://i.imgur.com/VHc5SJE.png" alt="" />
          <div className="text-center">
            <h1 className=" font-bold text-gray-800 sm:text-xl lg:text-2xl">
              {sold}
            </h1>
            <span className="text-gray-500">Ingressos Vendidos</span>
          </div>
        </div>

        <div className="m-4 flex items-center justify-around rounded-xl bg-white shadow-lg lg:w-1/3">
          <img src="https://i.imgur.com/Qnmqkil.png" alt="" />
          <div className="text-center">
            <h1 className=" font-bold text-gray-800 sm:text-xl lg:text-2xl">
              {validated}
            </h1>
            <span className="text-gray-500">Público Presente</span>
          </div>
        </div>
        <div className="m-4 flex items-center justify-around rounded-xl bg-white shadow-lg lg:w-1/3">
          <img src="https://i.imgur.com/dJeEVcO.png" alt="" />
          <div className="text-center">
            <h1 className=" font-bold text-gray-800 sm:text-2xl lg:text-2xl">
              R$ {cash}
            </h1>
            <span className="text-gray-500">Renda Total</span>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await axios.get('/api/dashboard')
  const sold = data.sold
  const validated = data.validated
  const cash = data.cash

  return {
    props: {
      sold,
      validated,
      cash,
    },
  }
}
