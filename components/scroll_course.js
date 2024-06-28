import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Header from '@/components/Header';
import React from "react";
export default function Home() {
  return (
    <div className={styles.container}>
      {/* <Header/> */}
      {/* <header className={styles.header}>
        <h1 className={styles.title}>
          Next.js Courses <i className="fas fa-book"></i>
        </h1>
        <nav className={styles.nav}>
          <Link href="/about" legacyBehavior>
            <a className={styles.navLink}>About</a>
          </Link>
          <Link href="/courses" legacyBehavior>
            <a className={styles.navLink}>Courses</a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a className={styles.navLink}>Contact</a>
          </Link>
        </nav>
      </header> */}
      <main className={styles.main}>
        <section className={styles.hero}>
          <h2 className={styles.heroTitle}>
            Master Next.js <i className="fas fa-laptop-code"></i>
          </h2>
          <p className={styles.heroSubtitle}>
            Learn Next.js from the best in the industry.
          </p>
          <Link href="/courses" legacyBehavior>
            <a className={styles.heroButton}>Browse Courses</a>
          </Link>
        </section>
        <section className={styles.coursesSection}>
          <h3 className={styles.sectionTitle}>Featured Courses</h3>
          <div className={styles.coursesGrid}>
            <Link href="/courses/beginners" legacyBehavior>
              <a className={styles.courseCard}>
                <h4 className={styles.courseTitle}>Next.js for Beginners</h4>
                <p className={styles.courseDescription}>
                  A comprehensive introduction to Next.js.
                </p>
              </a>
            </Link>
            <Link href="/courses/advanced" legacyBehavior>
              <a className={styles.courseCard}>
                <h4 className={styles.courseTitle}>Advanced Next.js Techniques</h4>
                <p className={styles.courseDescription}>
                  Take your Next.js skills to the next level.
                </p>
              </a>
            </Link>
            <Link href="/courses/seo" legacyBehavior>
              <a className={styles.courseCard}>
                <h4 className={styles.courseTitle}>Next.js and SEO</h4>
                <p className={styles.courseDescription}>
                  Optimize your Next.js site for search engines.
                </p>
              </a>
            </Link>
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <p>&copy; 2024 Next.js Courses. All rights reserved.</p>
      </footer>
    </div>
  );
}
