import { AppProvider } from '../data/context/AppContext'
import { AuthProvider } from '../data/context/AuthContext'
import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <AppProvider>
        <Head>
          <title>AnimeGeek</title>
          <link rel="shortcut icon" href="/tickets.svg" />
          <link rel="apple-touch-icon" href="/tickets.svg" />
          <meta name="description" content="A ticket management project" />
        </Head>
        <Component {...pageProps} />
      </AppProvider>
    </AuthProvider>
  )
}

export default MyApp
