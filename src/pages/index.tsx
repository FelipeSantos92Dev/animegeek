import Layout from '../components/template/Layout'

export default function Home() {
  return (
    <Layout titulo="Painel Administrativo" subtitulo="Dados gerais">
      <h3>Dashboard</h3>
      <div className="s mt-4 flex justify-between space-x-4">
        <div className="flex w-1/3 items-center justify-around rounded-xl bg-white shadow-lg">
          <img src="https://i.imgur.com/VHc5SJE.png" alt="" />
          <div className="text-center">
            <h1 className=" font-bold text-gray-800 sm:text-2xl lg:text-4xl">
              7.980
            </h1>
            <span className="text-gray-500">Ingressos Vendidos</span>
          </div>
        </div>
        <div className="flex w-1/3 items-center justify-around rounded-xl bg-white shadow-lg">
          <img src="https://i.imgur.com/Qnmqkil.png" alt="" />
          <div className="text-center">
            <h1 className=" font-bold text-gray-800 sm:text-2xl lg:text-4xl">
              7.240
            </h1>
            <span className="text-gray-500">Público Presente</span>
          </div>
        </div>
        <div className="flex w-1/3 items-center justify-around rounded-xl bg-white shadow-lg">
          <img src="https://i.imgur.com/dJeEVcO.png" alt="" />
          <div className="text-center">
            <h1 className=" font-bold text-gray-800 sm:text-2xl lg:text-4xl">
              R$ 72.000,00
            </h1>
            <span className="text-gray-500">Renda Total</span>
          </div>
        </div>
      </div>
    </Layout>
  )
}
