import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import { Motion, presets, spring } from "react-motion"
import { Container, Row, Col } from 'react-grid-system'
import Image from 'next/image'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Keda Manga</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main className={styles.main}>
        <Container fluid className={styles.main}>
          <Row>
            <Col sm={12} lg={6}>
              可达漫画，专为漫画阅读设计, 网站正在建设中。。。
            </Col>
            <Col sm={12} lg={6}>
              <div className={styles.product}>
                <img className={styles.productImage} src="/imgs/ipad.png" />
                <img className={styles.productImage} src="/imgs/iphone.png" />
              </div>
            </Col>
          </Row>
        </Container>
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
