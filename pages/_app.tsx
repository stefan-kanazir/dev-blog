import React from 'react'
import { AppProps } from 'next/app'
import Layout from '../layout/Layout'
import Head from 'next/head'

import '../styles/index.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp