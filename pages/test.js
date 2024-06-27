import Head from 'next/head';
import styles from '../styles/Cheese.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CCI - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <img src="/logo.png" alt="CCI Logo" className={styles.logo} />
        <nav className={styles.nav}>
          <a href="#" className={styles.navLink}><i className="fab fa-instagram"></i></a>
          <a href="#" className={styles.navLink}><i className="fab fa-tiktok"></i></a>
          <a href="#" className={styles.navLink}><i className="fab fa-facebook"></i></a>
          <a href="#" className={styles.navLink}><i className="fab fa-youtube"></i></a>
        </nav>
      </header>

      <main className={styles.main}>
        <h1 className={styles.title}>
          THE ELITE INSTITUTION FOR <br />
          <span className={styles.creators}>CREATORS,</span> <br />
          <span className={styles.entrepreneurs}>ENTREPRENEURS,</span> <br />
          <span className={styles.influencers}>INFLUENCERS,</span> <br />
          <span className={styles.dreamers}>AND DREAMERS.</span>
        </h1>
        <p className={styles.description}>
          California Creator's Institute has partnered with Pillai College to bring our comprehensive educational experience to Mumbai. Together, we aim to provide a blend of academic excellence and practical, real-world skills right in the heart of this vibrant city.
        </p>
        <button className={styles.button}>APPLY NOW!</button>
      </main>
    </div>
  );
}
