// pages/index.js

import Link from 'next/link';

export default function Home() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Next.js Courses</h1>
        <nav style={styles.nav}>
          <Link href="/about" style={styles.navLink}>
            About
          </Link>
          <Link href="/courses" style={styles.navLink}>
            Courses
          </Link>
          <Link href="/contact" style={styles.navLink}>
            Contact
          </Link>
        </nav>
      </header>
      <main style={styles.main}>
        <section style={styles.hero}>
          <h2 style={styles.heroTitle}>Master Next.js</h2>
          <p style={styles.heroSubtitle}>
            Learn Next.js from the best in the industry.
          </p>
          <Link href="/courses" style={styles.heroButton}>
            Browse Courses
          </Link>
        </section>
        <section style={styles.coursesSection}>
          <h3 style={styles.sectionTitle}>Featured Courses</h3>
          <div style={styles.coursesGrid}>
            <div style={styles.courseCard}>
              <h4 style={styles.courseTitle}>Next.js for Beginners</h4>
              <p style={styles.courseDescription}>
                A comprehensive introduction to Next.js.
              </p>
              <Link href="/courses/beginners" style={styles.courseLink}>
                Learn More
              </Link>
            </div>
            <div style={styles.courseCard}>
              <h4 style={styles.courseTitle}>Advanced Next.js Techniques</h4>
              <p style={styles.courseDescription}>
                Take your Next.js skills to the next level.
              </p>
              <Link href="/courses/advanced" style={styles.courseLink}>
                Learn More
              </Link>
            </div>
            <div style={styles.courseCard}>
              <h4 style={styles.courseTitle}>Next.js and SEO</h4>
              <p style={styles.courseDescription}>
                Optimize your Next.js site for search engines.
              </p>
              <Link href="/courses/seo" style={styles.courseLink}>
                Learn More
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer style={styles.footer}>
        <p>&copy; 2024 Next.js Courses. All rights reserved.</p>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '0 20px',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 0',
  },
  title: {
    fontSize: '2rem',
    color: '#333',
  },
  nav: {
    display: 'flex',
    gap: '20px',
  },
  navLink: {
    fontSize: '1rem',
    color: '#0070f3',
    textDecoration: 'none',
  },
  main: {
    padding: '40px 0',
  },
  hero: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  heroTitle: {
    fontSize: '2.5rem',
    color: '#333',
  },
  heroSubtitle: {
    fontSize: '1.2rem',
    color: '#666',
  },
  heroButton: {
    display: 'inline-block',
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#0070f3',
    borderRadius: '5px',
    textDecoration: 'none',
  },
  coursesSection: {
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: '2rem',
    color: '#333',
    marginBottom: '20px',
  },
  coursesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
  },
  courseCard: {
    padding: '20px',
    border: '1px solid #eaeaea',
    borderRadius: '10px',
  },
  courseTitle: {
    fontSize: '1.5rem',
    color: '#333',
  },
  courseDescription: {
    fontSize: '1rem',
    color: '#666',
    margin: '10px 0',
  },
  courseLink: {
    fontSize: '1rem',
    color: '#0070f3',
    textDecoration: 'none',
  },
  footer: {
    textAlign: 'center',
    padding: '20px 0',
    borderTop: '1px solid #eaeaea',
  },
};
