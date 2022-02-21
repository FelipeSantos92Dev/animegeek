import Head from 'next/head'
import Image from 'next/image'
import router from 'next/router'
import loading1 from '../../../public/images/loading1.gif'
import useAuth from '../../data/hook/useAuth'

export default function Forcar(props) {
  const { usuario, carregando } = useAuth()

  function renderizarConteudo() {
    return (
      <>
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
          if(!document.cookie?.includes("thunderbyte-animegeek")) {
            window.location.href = "/autenticacao"
          }
        `,
            }}
          />
        </Head>
        {props.children}
      </>
    )
  }

  function renderizarCarregando() {
    return (
      <div
        className={`
        flex h-screen items-center justify-center
      `}
      >
        <Image src={loading1} />
      </div>
    )
  }

  if (!carregando && usuario?.email) {
    return renderizarConteudo()
  } else if (carregando) {
    return renderizarCarregando()
  } else {
    router.push('/autenticacao')
    return null
  }
}
