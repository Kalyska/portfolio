import Head from 'next/head';
import React from "react";
import Header from '../components/Header';
import Landing from '../components/Landing';
import About from "../components/About";
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { useTranslation } from 'react-i18next';
import Loading from '../components/Loading';

export default function Home() {

  const { ready } = useTranslation('fr', { useSuspense: false });

  if (!ready) return <Loading />

  return (
    <>
      <Head>
        <title>Clemence Guelque</title>
        <meta name="description" content="Fullstack Web Developer Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header />

      <main className='main'>
        <div className='container'>
          <Landing />
          <About />
          <Contact />
        </div>

        <Footer />
      </main>
    </>
  )
}