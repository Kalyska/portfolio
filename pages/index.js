import Head from 'next/head'
import { BsChevronCompactDown } from 'react-icons/bs'
import { Inter } from '@next/font/google'
import React from "react";
import ReactDOM from "react-dom";
// eslint-disable-next-line
import "swiper/css/bundle";
import Carousel from "../components/Carousel";
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Clemence Guelque</title>
        <meta name="description" content="Fullstack Web Developer Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className='main'>
        <div className='choice'>
          <span>see in</span><span>fr</span><span>|</span><span>en</span>
        </div>

        <div className='container'>
          <div id="landing">
            <h1 className='title'><strong>Clémence Guelque</strong><br />Développeuse Web Fullstack</h1>
            <div className="listWrapper">
              <div className="listRow">
                
                <ul class="list">
                  <li class="listItem">Créons</li>
                  <li class="listItem">Développons</li>
                  <li class="listItem">Rions</li>
                  <li class="listItem">Travaillons</li>
                </ul>                
              </div>
              <span>ensemble</span>
            </div>

            <a className='chevronDown' href='#carousel'><BsChevronCompactDown /></a>
          </div>

          <div id="carousel">
            <Carousel />

          </div>
            <Contact/>

        </div>
        {/* <Footer/> */}
      </main>
    </>
  )
}
