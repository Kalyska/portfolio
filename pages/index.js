import Head from 'next/head'
import {BsChevronCompactDown} from 'react-icons/bs'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

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

      <main className={styles.main}>
        <div className={styles.description}>
          <span>see in </span><span>fr</span><span> | </span><span>en</span>
        </div>

        <div className={styles.center}>
          <div id="landing">
            <h1 className={styles.title}><strong>Clémence Guelque</strong><br/>Développeuse Web Fullstack</h1>
            <h2 className="">         
            </h2>
            <BsChevronCompactDown/>
          </div>
        </div>
      </main> 
    </>
  )
}
