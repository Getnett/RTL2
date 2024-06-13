import { Alert, Box, Button } from "@mui/material";
import { useState } from "react";

const Greeting = () => {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <Box py="3rem" px="4rem" display="flex" flexDirection="column">
      {showMessage && <Alert sx={{ color: "green" }}>Hi,Welcome!</Alert>}
      <Button
        sx={{
          "&:hover": {
            backgroundColor: "white",
          },
          textTransform: "capitalize",
        }}
        onClick={() => setShowMessage((prev) => !prev)}
      >
        Toggle Greeting
      </Button>
    </Box>
  );
};

export default Greeting;
