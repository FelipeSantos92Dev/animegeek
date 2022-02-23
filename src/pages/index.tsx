import { UserIconDash } from '../components/icons'
import Layout from '../components/template/Layout'

export default function Home() {
  return (
    <Layout titulo="Painel Administrativo" subtitulo="Dados gerais">
      <h3>Dashboard</h3>

      <div className="mt-4 md:flex">
        <div className="m-4 flex items-center justify-around rounded-xl bg-white shadow-lg lg:w-1/3">
          <img src="https://i.imgur.com/VHc5SJE.png" alt="" />
          <div className="text-center">
            <h1 className=" font-bold text-gray-800 sm:text-xl lg:text-2xl">
              7.980
            </h1>
            <span className="text-gray-500">Ingressos Vendidos</span>
          </div>
        </div>

        <div className="m-4 flex items-center justify-around rounded-xl bg-white shadow-lg lg:w-1/3">
          <img src="https://i.imgur.com/Qnmqkil.png" alt="" />
          <div className="text-center">
            <h1 className=" font-bold text-gray-800 sm:text-xl lg:text-2xl">
              7.240
            </h1>
            <span className="text-gray-500">Público Presente</span>
          </div>
        </div>
        <div className="m-4 flex items-center justify-around rounded-xl bg-white shadow-lg lg:w-1/3">
          <img src="https://i.imgur.com/dJeEVcO.png" alt="" />
          <div className="text-center">
            <h1 className=" font-bold text-gray-800 sm:text-2xl lg:text-2xl">
              R$ 72.000
            </h1>
            <span className="text-gray-500">Renda Total</span>
          </div>
        </div>
      </div>
    </Layout>
  )
}
