import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Header from '@/components/Header';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header/>
      <main className={styles.main}>
        <section className={styles.hero}>
          <h2 className={styles.heroTitle}>
            Launch Your Career in Entrepreneurship and Marketing <i className="fas fa-rocket"></i>
          </h2>
          <p className={styles.heroSubtitle}>
            Empower your future with our specialized courses designed for aspiring content creators.
          </p>
          <Link href="/about" legacyBehavior>
            <a className={styles.heroButton}>Explore Our Courses</a>
          </Link>
        </section>
        <section className={styles.coursesSection}>
          <h3 className={styles.sectionTitle}>Our Courses</h3>
          <div className={styles.coursesGrid}>
            <Link href="/upload" legacyBehavior>
              <a className={styles.courseCard}>
                <h4 className={styles.courseTitle}>Entrepreneurship for Content Creators</h4>
                <p className={styles.courseDescription}>
                  Discover the tools and strategies to start and grow your own business as a content creator.
                </p>
              </a>
            </Link>
            <Link href="/upload" legacyBehavior>
              <a className={styles.courseCard}>
                <h4 className={styles.courseTitle}>Marketing Mastery</h4>
                <p className={styles.courseDescription}>
                  Learn cutting-edge marketing techniques to build a strong brand and engage your audience.
                </p>
              </a>
            </Link>
            <Link href="/upload" legacyBehavior>
              <a className={styles.courseCard}>
                <h4 className={styles.courseTitle}>Guaranteed Placement Program</h4>
                <p className={styles.courseDescription}>
                  Complete our courses and secure a position in the industry with our placement assistance.
                </p>
              </a>
            </Link>
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <p>&copy; 2024 Entrepreneurship and Marketing Courses. All rights reserved.</p>
      </footer>
    </div>
  );
}
