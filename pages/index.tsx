import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import {Motion, presets, spring} from "react-motion";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Keda Manga</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <Motion defaultStyle={{offsetX: -300}} style={{offsetX: spring(-440, presets.gentle)}}>
                    {({offsetX}) => (
                        <div className={styles.product}>
                            <img className={styles.ipad} src="imgs/ipad.png" alt=""/>
                            <img className={styles.iphone} src="imgs/iphone.png" alt="" style={{
                                transform: `translateX(${offsetX}px)`
                            }}/>
                        </div>
                    )}
                </Motion>
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo}/>
                </a>
            </footer>
        </div>
    )
}
