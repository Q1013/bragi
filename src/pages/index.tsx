import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container} style={{backgroundImage: `url(background/nordic1.jpg)`}}>
      <Head>
        <title>Bragi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <section className={styles.controls}>
          <img src="img/skipBack.svg" alt="Back"/>
          <img src="img/play.svg" alt="Play"/>
          <img src="img/skipForward.svg" alt="Forward"/>
        </section>

        <section className={styles.progress}>
          <div></div>
        </section>

      </main>

      <footer className={styles.footer}>
        <p>Created by <b>Q1013_</b></p>
      </footer>

    </div>
  )
}
