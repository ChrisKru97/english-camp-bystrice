import Head from 'next/head'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return <>
    <Head>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Nova+Flat" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Quicksand" />
    </Head>
    <Component {...pageProps} />
  </>
}