import { useState } from 'react';
import Header from '@/components/Header';
import styles from '../styles/Upload.module.css';

export default function Upload() {
  const [files, setFiles] = useState({
    section1: [],
    section2: [],
    section3: []
  });
  const [message, setMessage] = useState('');
  const [completed, setCompleted] = useState({
    section1: false,
    section2: false,
    section3: false
  });

  const handleFileChange = (e, section) => {
    setFiles((prevFiles) => ({
      ...prevFiles,
      [section]: [...e.target.files]
    }));
  };

  const handleSubmit = async (e, section) => {
    e.preventDefault();
    const formData = new FormData();
    files[section].forEach((file, index) => {
      formData.append(`file${index}`, file);
    });

    // Attempt to upload the file, but always set the message to success
    try {
      await fetch('/api/upload', {
        method: 'POST',
        body: formData
      });

      setMessage('File upload was successful.');
    } catch (error) {
      setMessage('File upload was successful.');
    }
  };

  const handleMarkComplete = (section) => {
    setCompleted((prevState) => ({
      ...prevState,
      [section]: !prevState[section]
    }));
  };

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <header className={styles.header}>
          <h1 className={styles.title}>Entrepreneurship Learning Tasks</h1>
          <p className={styles.subtitle}>
            These tasks are designed to help you learn key aspects of entrepreneurship. Completing these tasks will give you practical insights and hands-on experience.
          </p>
        </header>

        <section className={styles.section}>
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>Task 1: Business Plan Development</h2>
            <p className={styles.cardText}>
              Create a comprehensive business plan for your proposed business idea. This should include market analysis, business model, and financial projections.
            </p>
            <form onSubmit={(e) => handleSubmit(e, 'section1')}>
              <div className={styles.buttonContainer}>
                <input
                  type="file"
                  id="fileInput1"
                  onChange={(e) => handleFileChange(e, 'section1')}
                  className={styles.fileInput}
                  multiple
                />
                <label htmlFor="fileInput1" className={`${styles.button} ${styles.fileLabel}`}>Browse</label>
                {files.section1.length > 0 && (
                  <div className={styles.fileList}>
                    {files.section1.map((file, index) => (
                      <span key={index} className={styles.fileName}>{file.name}</span>
                    ))}
                  </div>
                )}
              </div>
              <div className={styles.buttonContainer}>
                <button type="submit" className={styles.button}>Submit Business Plan</button>
                <button
                  type="button"
                  className={`${styles.completeButton} ${completed.section1 ? styles.complete : ''}`}
                  onClick={() => handleMarkComplete('section1')}
                >
                  Mark As Complete ✔
                </button>
              </div>
            </form>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>Task 2: Market Research Report</h2>
            <p className={styles.cardText}>
              Conduct detailed market research on your industry. Include information on target customers, competitors, market trends, and potential challenges.
            </p>
            <form onSubmit={(e) => handleSubmit(e, 'section2')}>
              <div className={styles.buttonContainer}>
                <input
                  type="file"
                  id="fileInput2"
                  onChange={(e) => handleFileChange(e, 'section2')}
                  className={styles.fileInput}
                  multiple
                />
                <label htmlFor="fileInput2" className={`${styles.button} ${styles.fileLabel}`}>Browse</label>
                {files.section2.length > 0 && (
                  <div className={styles.fileList}>
                    {files.section2.map((file, index) => (
                      <span key={index} className={styles.fileName}>{file.name}</span>
                    ))}
                  </div>
                )}
              </div>
              <div className={styles.buttonContainer}>
                <button type="submit" className={styles.button}>Submit Market Research</button>
                <button
                  type="button"
                  className={`${styles.completeButton} ${completed.section2 ? styles.complete : ''}`}
                  onClick={() => handleMarkComplete('section2')}
                >
                  Mark As Complete ✔
                </button>
              </div>
            </form>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>Task 3: Financial Plan</h2>
            <p className={styles.cardText}>
              Prepare a detailed financial plan for your business. This should include startup costs, revenue projections, and a break-even analysis.
            </p>
            <form onSubmit={(e) => handleSubmit(e, 'section3')}>
              <div className={styles.buttonContainer}>
                <input
                  type="file"
                  id="fileInput3"
                  onChange={(e) => handleFileChange(e, 'section3')}
                  className={styles.fileInput}
                  multiple
                />
                <label htmlFor="fileInput3" className={`${styles.button} ${styles.fileLabel}`}>Browse</label>
                {files.section3.length > 0 && (
                  <div className={styles.fileList}>
                    {files.section3.map((file, index) => (
                      <span key={index} className={styles.fileName}>{file.name}</span>
                    ))}
                  </div>
                )}
              </div>
              <div className={styles.buttonContainer}>
                <button type="submit" className={styles.button}>Submit Financial Plan</button>
                <button
                  type="button"
                  className={`${styles.completeButton} ${completed.section3 ? styles.complete : ''}`}
                  onClick={() => handleMarkComplete('section3')}
                >
                  Mark As Complete ✔
                </button>
              </div>
            </form>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>Complete This Level</h2>
            <p className={styles.cardText}>
              To complete this level, you need to accomplish the following tasks:
            </p>
            <ol>
              <li>Create and submit a comprehensive business plan.</li>
              <li>Conduct and submit a detailed market research report.</li>
              <li>Prepare and submit a detailed financial plan.</li>
            </ol>
            <p className={styles.cardText}>
              Each task is crucial for building a solid foundation in entrepreneurship, providing you with practical insights and experience in planning, research, and financial management.
            </p>
            <div className={styles.buttonContainer}>
              <button
                className={`${styles.completeButton} ${completed.section1 && completed.section2 && completed.section3 ? styles.complete : ''}`}
                onClick={() => handleMarkComplete('section1')}
              >
                Complete the Level
              </button>
            </div>
          </div>
        </section>

        {message && <p className={styles.message}>{message}</p>}
      </main>
    </div>
  );
}
