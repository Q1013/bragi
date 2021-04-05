import Head from 'next/head';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';

let durationTimeout: NodeJS.Timeout;

export default function Home() {

  const [currentTime, setCurrentTime] = useState(0);
  const [currentTimePercent, setCurrentTimePercent] = useState(currentTime);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const totalTime = 1000;

  const totalMinutes = Math.floor(totalTime/60);
  const totalSeconds = totalTime % 60;

  const [totalMinuteLeft, totalMinuteRight] = String(totalMinutes).padStart(2, '0').split('');
  const [totalSecondLeft, totalSecondRight] = String(totalSeconds).padStart(2, '0').split('');

  const currentMinutes = Math.floor(currentTime / 60);
  const currentSeconds = currentTime % 60;

  const [currentMinuteLeft, currentMinuteRight] = String(currentMinutes).padStart(2, '0').split('');
  const [currentSecondLeft, currentSecondRight] = String(currentSeconds).padStart(2, '0').split('');

  function startToPlay() {
    setIsPlaying(true);
  }

  function stopToPlay() {
    setIsPlaying(false);
  }

  function startNewMusic() {
    console.log('Nova musica');
  }

  useEffect(() => {
    if (isPlaying && currentTime < totalTime) {
      durationTimeout = setTimeout(() => {
        setCurrentTime(currentTime + 1);
      }, 1000)
      if (currentTime > 0) {

        setCurrentTimePercent(currentTime / (totalTime / 100));
      }
    } else if (isPlaying && currentTime == totalTime) {
      setCurrentTimePercent(currentTime / (totalTime / 100));
      setHasFinished(true);
      setIsPlaying(false);
      startNewMusic();
    }
  }, [isPlaying, currentTime])

  return (
    <div className={styles.container} style={{ backgroundImage: `url(background/nordic1.jpg)` }}>
      <Head>
        <title>Bragi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <section className={styles.controls}>
          <img src="img/skipBack.svg" alt="Back" />
          {isPlaying ? (
            <img src="img/pause.svg" alt="Pause" onClick={stopToPlay} />
          ) : (
            <img src="img/play.svg" alt="Play" onClick={startToPlay} />
          )}
          <img src="img/skipForward.svg" alt="Forward" />
        </section>

        <section className={styles.music}>
          <span id="nameMusic">Nome da Música - Artista</span>
        </section>

        <section className={styles.progress}>
          <span>
            {currentMinuteLeft}
            {currentMinuteRight}
          :
            {currentSecondLeft}
            {currentSecondRight}
          </span>


          <div className={styles.progressBar}>
            <div style={{ width: `${currentTimePercent}%` }}></div>
          </div>
          <span>
            {totalMinuteLeft}
            {totalMinuteRight}
            :
            {totalSecondLeft}
            {totalSecondRight}
            </span>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>Created by <b>Q1013_</b></p>
      </footer>

    </div>
  )
}
