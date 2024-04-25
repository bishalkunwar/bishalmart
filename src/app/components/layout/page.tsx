"use client"

import React from 'react'
import NavBar from "../navbar/page";
import FooterPage from "../footer/page";
import Head from "next/head";

const Layout = ({children}) => {
  return (
    <div className='layout'>
      <Head>
        <title>Bishal MAC store</title>
      </Head>
      <header>
        <NavBar/>
      </header>

      <main className='main-container'>
        {children}
      </main>

      <footer>
        <FooterPage/>
      </footer>
    </div>
  )
};

export default Layout;