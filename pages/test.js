import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Cheese.module.css';
import Header from '@/components/Header';
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <Header />

      <div className={styles.container}>
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
          <Link href="/about" passHref legacyBehavior>
            <a className={styles.button}>MORE INFO!</a>
          </Link>
        </main>
      </div>
    </React.Fragment>
  );
}
