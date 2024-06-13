import {
  Box,
  CircularProgress,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "./api";

const Users = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: getUsers,
  });

  if (error) {
    return (
      <Box
        data-testid="error"
        py="3rem"
        px="4rem"
        sx={{ backgroundColor: "red" }}
      >
        Something went wrong while fetching your data
      </Box>
    );
  }

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" width="100%">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box py="3rem" px="4rem" display="flex" flexDirection="column">
      <IconButton
        onClick={() => {}}
        sx={{
          "&:hover": {
            backgroundColor: "transparent !important",
          },
        }}
      >
        <RefreshIcon />
      </IconButton>
      <Box display="flex" justifyContent="center">
        <List>
          {data?.map((user) => (
            <ListItem key={user.id} disablePadding>
              <ListItemText
                primary={user.name}
                secondary={
                  <>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {user.email}
                    </Typography>
                  </>
                }
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};
export default Users;
