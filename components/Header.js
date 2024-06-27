import styles from '../styles/Cheese.module.css';
import Head from 'next/head';
import React from "react";

export default function Header() {
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
    </div>
  )
}
