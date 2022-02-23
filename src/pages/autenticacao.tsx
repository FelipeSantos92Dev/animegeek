import { SetStateAction, useState } from 'react'
import AuthInput from '../components/auth/AuthInput'
import { WarnIcon } from '../components/icons'
import useAuth from '../data/hook/useAuth'

export default function Autenticacao() {
  const { cadastrar, login, loginGoogle } = useAuth()
  const [erro, setErro] = useState(null)
  const [modo, setModo] = useState<'login' | 'cadastro'>('cadastro')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  function exibirErro(msg: SetStateAction<null>, time = 5000) {
    setErro(msg)
    setTimeout(() => setErro(null), time)
  }

  async function submeter() {
    try {
      if (modo === 'login') {
        await login!(email, senha)
      } else {
        await cadastrar!(email, senha)
      }
    } catch (e) {
      return
    }
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="hidden md:block md:w-1/2 lg:w-2/3">
        <img
          src="/images/image.jpg"
          alt="Imagem da tela de autenticação"
          className="h-screen w-full object-cover"
        />
      </div>
      <div className="m-10 w-full md:w-1/2 lg:w-1/3">
        <h1
          className={`
        mb-5 text-2xl font-bold
      `}
        >
          {modo === 'login'
            ? 'Entre com as suas credenciais'
            : 'Cadastre-se na plataforma'}
        </h1>

        {erro ? (
          <div
            className={`
            my-2 flex
            items-center rounded-lg
            border border-red-700 bg-red-400
            py-3 px-5 text-white
          `}
          >
            {WarnIcon}
            <span className="ml-3">{erro}</span>
          </div>
        ) : (
          false
        )}

        <AuthInput
          label="Email"
          tipo="email"
          valor={email}
          valorMudou={setEmail}
          requerido
        />
        <AuthInput
          label="Senha"
          tipo="password"
          valor={senha}
          valorMudou={setSenha}
          requerido
        />
        <button
          onClick={submeter}
          className={`
        mt-6 w-full rounded-lg
        bg-indigo-500 px-4 py-3 text-white hover:bg-indigo-400
      `}
        >
          {modo === 'login' ? 'Entrar' : 'Cadastrar'}
        </button>
        <hr className="my-6 w-full border-gray-300" />
        <button
          onClick={loginGoogle}
          className={`
        w-full rounded-lg
        bg-red-500 px-4 py-3 text-white hover:bg-red-400
      `}
        >
          Entrar com Google
        </button>

        {modo === 'login' ? (
          <p className="mt-8">
            Novo por aqui?
            <a
              onClick={() => setModo('cadastro')}
              className={`
              hover:text-blu-700 mr-1 cursor-pointer font-semibold
              text-blue-500 hover:text-blue-700
            `}
            >
              {' '}
              Crie uma conta gratuitamente
            </a>
          </p>
        ) : (
          <p className="mt-8">
            Já possui cadastro?
            <a
              onClick={() => setModo('login')}
              className={`
              hover:text-blu-700 mr-1 cursor-pointer font-semibold
              text-blue-500 hover:text-blue-700
            `}
            >
              {' '}
              Entre com as suas credenciais
            </a>
          </p>
        )}
      </div>
    </div>
  )
}
