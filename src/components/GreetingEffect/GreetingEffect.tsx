import { Alert, Box } from "@mui/material";
import { useEffect, useState } from "react";

const GreetingEffect = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    setMessage("Hi,there!");
  }, []);

  return (
    <Box py="3rem" px="4rem" display="flex" flexDirection="column">
      <Box display="flex" justifyContent="center">
        <Alert>{message}</Alert>
      </Box>
    </Box>
  );
};

export default GreetingEffect;
