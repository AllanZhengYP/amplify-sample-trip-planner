import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const AppContainer = ({children}) => {
  return <Box>
      <AppBar position="static" sx={{ marginBottom: "10px" }}>
        <Toolbar>
          <Typography variant="h6" component="div">TripId</Typography>
        </Toolbar>
      </AppBar>
      {children}
    </Box>
}

export default AppContainer;