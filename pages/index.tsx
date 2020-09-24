import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {Motion, presets, spring} from "react-motion";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Keda Manga</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
          <Motion defaultStyle={{angle: 0}} style={{angle: spring(-40, presets.noWobble)}}>
              {({angle}) => <img className={styles.product} src="imgs/ipad.png" alt="" style={{
                  transform: `rotate(${angle}deg)`
              }}/>}
          </Motion>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
