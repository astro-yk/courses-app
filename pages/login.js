import { Box, Grid, Stack, Typography, Button, Container, TextField, Alert } from "@mui/material";
import { useState } from "react";
import { backend_url } from "../utils/constants";
import Header from "@/components/Header";
import { useRouter } from "next/router";
import styles from '../styles/Register.module.css';
import { handleLogin, handleFailedLogin } from "@/utils/requests";



function email_login(email, password, setErrorMessages, setSuccessMessages, router) {
  fetch(`${backend_url}/coursesapp/login/email-password/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      "Accept": "application/json",
    },
    body: JSON.stringify({ email: email, password: password }),
  }).then(response => response.status === 200 ? handleLoginFlow(response, setSuccessMessages, setErrorMessages, router) : handleFailedLogin(response, setErrorMessages))
}


function handleLoginFlow(response, setSuccessMessages, setErrorMessages, router) {
  handleLogin(response, setSuccessMessages);
  setErrorMessages([]);
  router.push("/test");
}


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorMessages, setErrorMessages] = useState([]);
  const [successMessages, setSuccessMessages] = useState([]);

  const router = useRouter();

  return (
    <Box component="div">
      <Header />
      <Container maxWidth="sm" className={styles.container}>
        <Typography variant="h4" className={styles.typography}>
          Login
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

        <Button fullWidth className={styles.button} variant="contained" onClick={() => email_login(email, password, setErrorMessages, setSuccessMessages, router)}>Login</Button>
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
  )
}