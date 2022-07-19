import Head from 'next/head'
import { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import '../styles/globals.css'

function MyApp ({ Component, pageProps }) {
  // const { origin } = window.location
  const [origin, setOrigin] = useState('')
  useEffect(() => {
    setOrigin(window.location.origin)
  }, [])
  return (
    <Layout>
      <Head>
        <link rel="icon" type="image/png" href="/favicon-16x16.png" />
        <title>Observatorio de Contratación Pública de Ecuador</title>
        <meta name="description" content="Es una iniciativa de Fundación Ciudadanía y Desarrollo que, a través del análisis y difusión de datos de la contratación pública, busca promover la contratación abierta en Ecuador." />
        <meta itemProp="name" content="Observatorio de Contratación Pública de Ecuador" />
        <meta itemProp="description" content="Es una iniciativa de Fundación Ciudadanía y Desarrollo que, a través del análisis y difusión de datos de la contratación pública, busca promover la contratación abierta en Ecuador." />
        <meta itemProp="image" content={`${origin}/facebook.png`} />

        {/* Facebook */}
        <meta property="og:url" content={origin} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Observatorio de Contratación Pública de Ecuador" />
        <meta property="og:description" content="Es una iniciativa de Fundación Ciudadanía y Desarrollo que, a través del análisis y difusión de datos de la contratación pública, busca promover la contratación abierta en Ecuador." />
        <meta property="og:image" content={`${origin}/facebook.png`} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Observatorio de Contratación Pública de Ecuador" />
        <meta name="twitter:description" content="Es una iniciativa de Fundación Ciudadanía y Desarrollo que, a través del análisis y difusión de datos de la contratación pública, busca promover la contratación abierta en Ecuador." />
        <meta name="twitter:image" content={`${origin}/twitter.png`} />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
