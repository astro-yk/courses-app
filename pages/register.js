import { Box, Grid, Stack, Typography, Button, Container, TextField, Alert } from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/router";
import { backend_url } from "../utils/constants";


function register_account(email, password, setErrorMessages, setSuccessMessages, router) {
  fetch(`${backend_url}/coursesapp/register/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      "Accept": "application/json",
    },
    body: JSON.stringify({ email: email, password: password }),

  }).then(response => response.status === 201 ? handleRegistration(response, setSuccessMessages, router) : handleFailedRegistration(response, setErrorMessages))
}

async function handleRegistration(response, setSuccessMessages, router) {
  setSuccessMessages(["Registration Completed! Redirecting to Login"]);
  router.push("/signin");
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

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessages, setErrorMessages] = useState([]);
  const [successMessages, setSuccessMessages] = useState([]);
  const router = useRouter();


  return (
    <Box component="div">
      <Container maxWidth="sm" sx={{ marginTop: "5em", paddingBlock: "2em", border: "3px solid #FFFFFF", borderRadius: "1em" }}>
        <Typography variant="h3" sx={{ textAlign: "center", fontWeight: 800 }}>
          REGISTER
        </Typography>

        <TextField id="email" label="e-mail" variant="outlined" type="email" fullWidth sx={{ marginTop: "2em", fieldset: { borderColor: "white" } }} onChange={(e) => setEmail(e.target.value)} />
        <TextField id="email" label="password" type="password" variant="outlined" fullWidth sx={{ marginTop: "2em", fieldset: { borderColor: "white" } }} onChange={(e) => setPassword(e.target.value)} />

        <Button fullWidth sx={{ marginTop: "2em" }} variant="contained" onClick={() => register_account(email, password, setErrorMessages, setSuccessMessages, router)}>Register</Button>
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