import { Box } from "@mui/material";
import { FC } from "react";

interface DisplayWinnerProps {
  user: string;
}
const DisplayWinner: FC<DisplayWinnerProps> = ({ user }) => {
  return <Box data-testid="display-user">{user}</Box>;
};

export default DisplayWinner;
