import { ChangeEvent } from "react";
import { Box } from "@mui/material";
import AddWinner from "./AddWinner";
import { useState } from "react";
import DisplayWinner from "./DisplayWinner";

const ManageWinners = () => {
  const [winner, setWinner] = useState("");

  const handleWinner = (e: ChangeEvent<HTMLInputElement>) => {
    setWinner(e.target.value);
  };
  return (
    <Box py="3rem" px="4rem" display="flex" flexDirection="column">
      <AddWinner user={winner} addUser={handleWinner} />
      <DisplayWinner user={winner} />
    </Box>
  );
};

export default ManageWinners;
