import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmitLoginInfo = () => {
    setEmail("");
    setPassword("");
  };
  return (
    <Box py="3rem" px="4rem" display="flex" justifyContent="center">
      <Box maxWidth="sm">
        <Typography variant="subtitle1" component="h2">
          Log In
        </Typography>
        <TextField
          fullWidth
          margin="normal"
          name="email"
          type="email"
          placeholder="Enter your email"
          label="Email"
          value={email}
          onChange={handleEmailChange}
        />
        <TextField
          fullWidth
          margin="normal"
          name="password"
          type="password"
          placeholder=""
          label="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <Button
          onClick={handleSubmitLoginInfo}
          sx={{
            maxWidth: "100%",
            backgroundColor: "purple",
            color: "#fff",
            textTransform: "capitalize",
          }}
        >
          Sign In
        </Button>
      </Box>
    </Box>
  );
};
export default Login;
