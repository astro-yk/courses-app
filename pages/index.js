import { Box, Typography, Button, Container, TextField, Alert } from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/router";
import styles from '../styles/Register.module.css';
import Header from "@/components/Header";
import ClickableTypography from "@/components/ClickableTypography";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMessages, setSuccessMessages] = useState([]);
  const [courseCode, setCourseCode] = useState("");
  const [showCourseCodes, setShowCourseCodes] = useState(false);
  const router = useRouter();

  const register_account = (email, password, courseCode) => {
    setSuccessMessages(["Registration Completed!"]);
    // Simulate successful login and redirect
    handleLoginFlow(email, password, courseCode);
  };

  const handleLoginFlow = (email, password, courseCode) => {
    // Simulate a delay for the login process
    setTimeout(() => {
      if (courseCode) {
        signUpForCourses(courseCode);
      } else {
        router.push('/test'); // Redirect to the desired page
      }
    }, 1000);
  };

  const signUpForCourses = (courseCode) => {
    // Simulate course signup
    setTimeout(() => {
      setSuccessMessages(messages => [...messages, "Successfully signed up for the course!"]);
      router.push('/test'); // Redirect to the desired page after course signup
    }, 1000);
  };

  return (
    <Box component="div">
      <Header />
      <Container maxWidth="sm" className={styles.container}>
        <Typography variant="h4" className={styles.typography}>
          Register
        </Typography>

        <TextField
          id="email"
          label="E-mail"
          variant="outlined"
          type="email"
          fullWidth
          className={styles.textField}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          className={styles.textField}
          onChange={(e) => setPassword(e.target.value)}
        />

        <ClickableTypography variant="body1" sx={{ marginTop: "0.5em" }} onClick={() => setShowCourseCodes(showCode => !showCode)}>
          Already have a course code?
        </ClickableTypography>

        {showCourseCodes ? (
          <TextField
            id="course_code"
            label="Course Code"
            variant="outlined"
            type="text"
            fullWidth
            className={styles.textField}
            onChange={(e) => setCourseCode(e.target.value)}
          />
        ) : <div />}

        <Button fullWidth className={styles.button} variant="contained" onClick={() => register_account(email, password, courseCode)}>Register</Button>
      </Container>

      <Container maxWidth="sm">
        {successMessages.map((item, index) => (
          <Alert severity="success" className={styles.successAlert} key={index}>
            {item}
          </Alert>
        ))}
      </Container>
    </Box>
  );
}
