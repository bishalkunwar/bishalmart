import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from 'react'
import NavBar from "../app/components/navbar/page";
import FooterPage from "../app/components/footer/page";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bishal-Mart",
  description: "This is a mini mart by Bishal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <Head>
        <title>Bishal MAC store</title>
      </Head> */}
      
      <body className={inter.className}>
        {/* <div className='layout'>
          
          <header>
            <NavBar/>
          </header>

          <main className='main-container'>
            {children}
          </main>

          <footer>
            <FooterPage/>
          </footer>
        </div> */}
        {children}
      </body>
    </html>
  );
}
