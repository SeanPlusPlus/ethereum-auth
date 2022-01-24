import React from 'react'
import Head from 'next/head'

export const Header = () => {
  return (
    <Head>
      <title>Ethereum Auth Demo</title>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      <meta name="description" content="Ethereum Authentication Demo" />
      <meta property="og:url" content="https://ethereum-auth.vercel.app/" />
      <meta property="og:title" content="Ethereum Authentication Demo" />
      <meta property="og:description" content="A Web3 Authentication Flow" />
      <meta property="og:site_name" content="ethereum auth" />
      <meta property="og:image" content="https://ethereum.org/static/a183661dd70e0e5c70689a0ec95ef0ba/6ed5f/eth-diamond-purple.webp" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}