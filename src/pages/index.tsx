import Layout from '../components/template/Layout'

export default function Home() {
  return (
    <Layout titulo="Página Inicial" subtitulo="Template Admin">
      <h3>Conteúdo</h3>
      <div className="s mt-4 flex justify-between space-x-4">
        <div className="flex w-1/3 items-center justify-around rounded-xl bg-white shadow-lg">
          <img src="https://i.imgur.com/VHc5SJE.png" alt="" />
          <div className="text-center">
            <h1 className=" font-bold text-gray-800 sm:text-2xl lg:text-4xl">
              534
            </h1>
            <span className="text-gray-500">Coaches</span>
          </div>
        </div>
        <div className="flex w-1/3 items-center justify-around rounded-xl bg-white shadow-lg">
          <img src="https://i.imgur.com/Qnmqkil.png" alt="" />
          <div className="text-center">
            <h1 className=" font-bold text-gray-800 sm:text-2xl lg:text-4xl">
              9.7k
            </h1>
            <span className="text-gray-500">Kids</span>
          </div>
        </div>
        <div className="flex w-1/3 items-center justify-around rounded-xl bg-white shadow-lg">
          <img src="https://i.imgur.com/dJeEVcO.png" alt="" />
          <div className="text-center">
            <h1 className=" font-bold text-gray-800 sm:text-2xl lg:text-4xl">
              50 M
            </h1>
            <span className="text-gray-500">Revenue</span>
          </div>
        </div>
      </div>
    </Layout>
  )
}
