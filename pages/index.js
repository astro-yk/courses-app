import { Box, Typography, Button, Container, TextField, Alert } from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/router";
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
      <Container
        maxWidth="sm"
        sx={{
          marginTop: '5em',
          padding: '2em',
          background: 'linear-gradient(to bottom, #1e1e1e, #000000)',
          color: '#fff',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
          borderRadius: '1em',
          textAlign: 'center'
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 500,
            color: '#fff',
            marginBottom: '1em',
            fontFamily: 'Anton, sans-serif'
          }}
        >
          Register
        </Typography>

        <TextField
          id="email"
          label="E-mail"
          variant="outlined"
          type="email"
          fullWidth
          sx={{
            marginTop: '1.5em',
            '& fieldset': {
              borderColor: '#555 !important',
              borderRadius: '0.5em'
            },
            '&:hover fieldset': {
              borderColor: '#777 !important'
            },
            '& input': {
              color: '#fff',
              fontFamily: 'Roboto, sans-serif'
            },
            '& label': {
              color: '#aaa',
              fontFamily: 'Roboto, sans-serif'
            }
          }}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          sx={{
            marginTop: '1.5em',
            '& fieldset': {
              borderColor: '#555 !important',
              borderRadius: '0.5em'
            },
            '&:hover fieldset': {
              borderColor: '#777 !important'
            },
            '& input': {
              color: '#fff',
              fontFamily: 'Roboto, sans-serif'
            },
            '& label': {
              color: '#aaa',
              fontFamily: 'Roboto, sans-serif'
            }
          }}
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
            sx={{
              marginTop: '1.5em',
              '& fieldset': {
                borderColor: '#555 !important',
                borderRadius: '0.5em'
              },
              '&:hover fieldset': {
                borderColor: '#777 !important'
              },
              '& input': {
                color: '#fff',
                fontFamily: 'Roboto, sans-serif'
              },
              '& label': {
                color: '#aaa',
                fontFamily: 'Roboto, sans-serif'
              }
            }}
            onChange={(e) => setCourseCode(e.target.value)}
          />
        ) : <div />}

        <Button
          fullWidth
          variant="contained"
          sx={{
            marginTop: '1em',
            background: '#4285f4 !important',
            color: '#fff !important',
            transition: 'background 0.3s ease',
            fontFamily: 'Roboto, sans-serif',
            borderRadius: '0.5em',
            '&:hover': {
              background: '#357ae8 !important'
            }
          }}
          onClick={() => register_account(email, password, courseCode)}
        >
          Register
        </Button>
      </Container>

      <Container maxWidth="sm">
        {successMessages.map((item, index) => (
          <Alert severity="success" key={index} sx={{ marginTop: '1em', transition: 'opacity 0.3s ease', fontFamily: 'Roboto, sans-serif', borderRadius: '0.5em' }}>
            {item}
          </Alert>
        ))}
      </Container>
    </Box>
  );
}
