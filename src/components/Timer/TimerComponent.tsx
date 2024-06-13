import { Alert, Box, Button } from "@mui/material";
import { useState } from "react";

let intervalId: NodeJS.Timer | null = null;

const TimerComponent = () => {
  const [tick, setTick] = useState(0);

  const startTimer = () => {
    if (!intervalId) {
      intervalId = setInterval(() => {
        setTick(tick + 1);
      }, 1000);
    }
  };

  const stopTimer = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setTick(0);
      intervalId = null;
    }
  };
  return (
    <Box py="3rem" px="4rem" display="flex" flexDirection="column">
      <Alert>{tick}</Alert>
      <Box display="flex" justifyContent="center">
        <Button onClick={startTimer} sx={{ textTransform: "capitalize" }}>
          Start Timer
        </Button>
        <Button onClick={stopTimer} sx={{ textTransform: "capitalize" }}>
          Stop Timer
        </Button>
      </Box>
    </Box>
  );
};

export default TimerComponent;
