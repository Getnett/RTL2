import { ChangeEvent, FC } from "react";
import { Box, TextField } from "@mui/material";

interface AddWinnerProps {
  user: string;
  addUser: (e: ChangeEvent<HTMLInputElement>) => void;
}

const AddWinner: FC<AddWinnerProps> = ({ user, addUser }) => {
  return (
    <Box py="3rem" px="4rem" display="flex" flexDirection="column">
      <TextField
        margin="normal"
        fullWidth
        label="Add Winner"
        value={user}
        onChange={addUser}
      />
    </Box>
  );
};

export default AddWinner;
