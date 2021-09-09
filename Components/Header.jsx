import React from 'react'
import Head from 'next/head'

const Header = ({title = "Home"}) => {
  return (
    <Head>
      <title>ON Room | {title}</title>
      <link rel="shortcut icon" href="/favicon.png" />
      <meta name="description" content="this website is for finding cheap, confortable room with good prices"/>
    </Head>
  );
}


export default Header
