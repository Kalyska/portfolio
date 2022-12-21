import Head from 'next/head'
import { BsChevronCompactDown } from 'react-icons/bs'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.scss'
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

      <main className={styles.main}>
        <div className={styles.choice}>
          <span>see in</span><span>fr</span><span>|</span><span>en</span>
        </div>

        <div className={styles.center}>
          <div id="landing">
            <h1 className={styles.title}><strong>Clémence Guelque</strong><br />Développeuse Web Fullstack</h1>
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

            <BsChevronCompactDown className='chevronDown' href='#projects' />
          </div>

          <div id="projects">


          </div>

          <div id="contact">
            {/* <Contact/> */}
          </div>
        </div>

        {/* <Footer/> */}
      </main>
    </>
  )
}
