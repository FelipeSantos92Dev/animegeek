import Layout from '../components/template/Layout'

export default function Perfil() {
  return (
    <Layout titulo="Perfil do Usuário" subtitulo="Dados pessoais">
      <h3>Perfil</h3>

      <div className="relative my-24 mt-4 w-full overflow-hidden rounded shadow-2xl">
        <div className="grid  bg-white ">
          <div className="col-span-12 h-full pb-12 md:col-span-10 md:border-l md:border-solid md:border-black md:border-opacity-25">
            <div className="px-4 pt-4">
              <form action="#" className="flex flex-col space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold">Basic Information</h3>
                  <hr />
                </div>

                <div className="form-item">
                  <label className="text-xl ">Full Name</label>
                  <input
                    type="text"
                    value="Antonia P. Howell"
                    className="focus:shadow-outline mr-2 w-full appearance-none rounded py-1 px-2 text-black  text-opacity-50 shadow focus:border-blue-200 focus:outline-none"
                    disabled
                  />
                </div>

                <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
                  <div className="form-item w-full">
                    <label className="text-xl ">Username</label>
                    <input
                      type="text"
                      value="antonia"
                      className="focus:shadow-outline mr-2 w-full appearance-none rounded py-1 px-2 text-black text-opacity-50 text-opacity-25 shadow focus:border-blue-200 focus:outline-none "
                      disabled
                    />
                  </div>

                  <div className="form-item w-full">
                    <label className="text-xl ">Email</label>
                    <input
                      type="text"
                      value="antoniaph@gmail.com"
                      className="focus:shadow-outline mr-2 w-full appearance-none rounded py-1 px-2 text-black text-opacity-50 text-opacity-25 shadow focus:border-blue-200 focus:outline-none "
                      disabled
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
