import { Box, Typography, Button, Container, TextField, Alert } from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/router";
import { backend_url } from "../utils/constants";
import styles from '../styles/Register.module.css';
import Header from "@/components/Header";
import { handleLogin, handleFailedLogin } from "@/utils/requests";
import ClickableTypography from "@/components/ClickableTypography";
import { getCookie } from 'cookies-next';



function register_account(email, password, setErrorMessages, setSuccessMessages, router, successMessages, showCourseCodes, courseCode) {
  fetch(`${backend_url}/coursesapp/register/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      "Accept": "application/json",
    },
    body: JSON.stringify({ email: email, password: password }),

  }).then(response => response.status === 201 ? handleRegistrationFlow(response, successMessages, setSuccessMessages, setErrorMessages, router, email, password, showCourseCodes, courseCode) : handleFailedRegistration(response, setErrorMessages))
}

async function handleRegistrationFlow(response, successMessages, setSuccessMessages, setErrorMessages, router, email, password, showCourseCodes, courseCode) {
  setSuccessMessages(["Registration Completed!"]);
  setErrorMessages([]);

  fetch(`${backend_url}/coursesapp/login/email-password/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      "Accept": "application/json",
    },
    body: JSON.stringify({ email: email, password: password }),
  }).then(response => response.status === 200 ? handleLogin(response, setSuccessMessages).then(res => signUpForCourses(showCourseCodes, courseCode, setSuccessMessages, setErrorMessages)) : handleFailedLogin(response, setErrorMessages).then(res => setErrorMessages(messages => [...messages, "Registration succeeded but failed to login :("])))
}

function signUpForCourses(showCourseCodes, course, setSuccessMessages, setErrorMessages) {
  if (!showCourseCodes) {
    return;
  }
  if (course.length === 0) {
    return;
  }

  fetch(`${backend_url}/coursesapp/join_course/${course}/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      "Accept": "application/json",
      "Authorization": `Token ${getCookie("token")}`
    },
  }).then(response => response.status === 200 ? setSuccessMessages(messages=> [...messages, "Successfully signed up for the course!"]) : setErrorMessages(messages=> [...messages, "Could not sign up for the course."]) )

}

async function handleFailedRegistration(response, setErrorMessages) {
  let response_json = await response.json();

  let error_messages = [];

  if ("non_field_errors" in response_json["errors"]) {
    error_messages.push(...response_json["errors"]["non_field_errors"]);
  }
  if ("email" in response_json["errors"]) {
    error_messages.push(...response_json["errors"]["email"]);
  }
  if ("password" in response_json["errors"]) {
    error_messages.push(...response_json["errors"]["password"]);
  }

  setErrorMessages(error_messages);
}

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessages, setErrorMessages] = useState([]);
  const [successMessages, setSuccessMessages] = useState([]);
  const [courseCode, setCourseCode] = useState("");
  const [showCourseCodes, setShowCourseCodes] = useState(false);
  const router = useRouter();

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

        <Button fullWidth className={styles.button} variant="contained" onClick={() => register_account(email, password, setErrorMessages, setSuccessMessages, router, successMessages, showCourseCodes, courseCode)}>Register</Button>
      </Container>



      <Container maxWidth="sm">
        {errorMessages.map((item, index) => (
          <Alert severity="error" className={styles.errorAlert} key={index}>
            {item}
          </Alert>
        ))}
        {successMessages.map((item, index) => (
          <Alert severity="success" className={styles.successAlert} key={index}>
            {item}
          </Alert>
        ))}
      </Container>
    </Box>
  );
}
