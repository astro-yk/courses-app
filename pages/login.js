import { Box, Grid, Stack, Typography, Button, Container, TextField, Alert } from "@mui/material";
import { useState } from "react";
import { backend_url } from "../utils/constants";
import Header from "@/components/Header";
import { useRouter } from "next/router";

function email_login(email, password, setErrorMessages, setSuccessMessages, router) {
  fetch(`${backend_url}/coursesapp/login/email-password/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      "Accept": "application/json",
    },
    body: JSON.stringify({ email: email, password: password }),

  }).then(response => response.status === 201 ? handleRegistration(response, setSuccessMessages, router) : handleFailedLogin(response, setErrorMessages))
}

async function handleLogin(response, setSuccessMessages, router) {
  console.log("sigma")
}

async function handleFailedLogin(response, setErrorMessages, router) {
  let response_json = await response.json();
  console.log(response_json);
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
      <Container maxWidth="sm" sx={{ marginTop: "5em", paddingBlock: "2em", border: "3px solid #FFFFFF", borderRadius: "1em" }}>
        <Typography variant="h3" sx={{ textAlign: "center", fontWeight: 800 }}>
          LOGIN
        </Typography>

        <TextField id="email" label="e-mail" variant="outlined" type="email" fullWidth sx={{ marginTop: "2em", fieldset: { borderColor: "white" } }} onChange={(e) => setEmail(e.target.value)} />
        <TextField id="password" label="password" type="password" variant="outlined" fullWidth sx={{ marginTop: "2em", fieldset: { borderColor: "white" } }} onChange={(e) => setPassword(e.target.value)} />
        
        <Button fullWidth sx={{ marginTop: "2em" }} onClick={() => email_login(email, password, setErrorMessages, setSuccessMessages, router)} variant="contained">Login</Button>

      </Container>

      <Container maxWidth="sm" sx={{ marginTop: "1em" }}>
        {errorMessages.map((item, index) => (
          <Alert severity="error" sx={{marginBlock: "1em"}}>
            {item}
          </Alert>
        ))}
        {successMessages.map((item, index) => (
          <Alert severity="success" sx={{marginBlock: "1em"}}>
            {item}
          </Alert>
        ))}
      </Container>
    </Box>
  )
}