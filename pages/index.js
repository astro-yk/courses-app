import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Header from '@/components/Header';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header/>
      {/* <header className={styles.header}>
        <h1 className={styles.title}>
          Next.js Courses <i className="fas fa-book"></i>
        </h1>
        <nav className={styles.nav}>
          <Link href="/about">
            <a className={styles.navLink}>About</a>
          </Link>
          <Link href="/courses">
            <a className={styles.navLink}>Courses</a>
          </Link>
          <Link href="/contact">
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
          <Link href="/courses">
            Browse Courses
          </Link>
        </section>
        <section className={styles.coursesSection}>
          <h3 className={styles.sectionTitle}>Featured Courses</h3>
          <div className={styles.coursesGrid}>
            <div className={styles.courseCard}>
              <h4 className={styles.courseTitle}>Next.js for Beginners</h4>
              <p className={styles.courseDescription}>
                A comprehensive introduction to Next.js.
              </p>
              <Link href="/courses/beginners">
                Learn More
              </Link>
            </div>
            <div className={styles.courseCard}>
              <h4 className={styles.courseTitle}>Advanced Next.js Techniques</h4>
              <p className={styles.courseDescription}>
                Take your Next.js skills to the next level.
              </p>
              <Link href="/courses/advanced">
                Learn More
              </Link>
            </div>
            <div className={styles.courseCard}>
              <h4 className={styles.courseTitle}>Next.js and SEO</h4>
              <p className={styles.courseDescription}>
                Optimize your Next.js site for search engines.
              </p>
              <Link href="/courses/seo">
                Learn More
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <p>&copy; 2024 Next.js Courses. All rights reserved.</p>
      </footer>
    </div>
  );
}
