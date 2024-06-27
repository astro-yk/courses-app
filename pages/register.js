import { Box, Typography, Button, Container, TextField, Alert } from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/router";
import { backend_url } from "../utils/constants";
import styles from '../styles/Register.module.css';

function register_account(email, password, setErrorMessages, setSuccessMessages, router) {
  fetch(`${backend_url}/coursesapp/register/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      "Accept": "application/json",
    },
    body: JSON.stringify({ email: email, password: password }),

  }).then(response => response.status === 201 ? handleRegistration(response, setSuccessMessages, setErrorMessages, router) : handleFailedRegistration(response, setErrorMessages))
}

async function handleRegistration(response, setSuccessMessages, router) {
  setSuccessMessages(["Registration Completed! Redirecting to Login"]);
  setErrorMessages([]);
  router.push("/login");
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
  const router = useRouter();

  return (
    <Box component="div">
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

        <Button fullWidth className={styles.button} variant="contained" onClick={() => register_account(email, password, setErrorMessages, setSuccessMessages, router)}>Register</Button>
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
