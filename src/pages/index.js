"use client";
import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useRouter } from "next/navigation";
import { InputLabel } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "./_app";
import { login, register } from "@/service/authrequest";

const theme = createTheme();

export default function Home() {
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext);
  const [isRegister, setIsRegister] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let email = data.get("email");
    let password = data.get("password");
    let res;

    if (isRegister == true) {
      res = await register({
        email,
        password,
      });
    } else {
      res = await login({
        email,
        password,
      });
    }

    if (res.data.status === "success") {
      setIsLoggedIn(true);
    }
    if (res.data.status === "failed") {
      setErrorMsg(res.data.message)
    }
    
  };

  useEffect(() => {
    if (isLoggedIn === true) {
      router.push("/dashboard");
    }
  }, [isLoggedIn]);

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          {errorMsg && <Typography color="error" component="h1" variant="h5">
            {errorMsg}
          </Typography>}
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <InputLabel>Email Address</InputLabel>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <InputLabel>Password</InputLabel>
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {isRegister ? "Register" : "Sign In"}
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                {isRegister ? (
                  <Link
                    onClick={() => {
                      setIsRegister(false);
                    }}
                    variant="body2"
                  >
                    {"have an account? Log in"}
                  </Link>
                ) : (
                  <Link
                    onClick={() => {
                      setIsRegister(true);
                    }}
                    variant="body2"
                  >
                    {"Don't have an account? Sign Up"}
                  </Link>
                )}
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
