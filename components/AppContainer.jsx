import { Amplify } from 'aws-amplify';
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import { useEffect, useState } from "react";
import { Auth } from "@aws-amplify/auth";
import { Hub } from "@aws-amplify/core"
import Link from "next/link";

import awsExports from '../src/aws-exports';
Amplify.configure(awsExports);

const AppContainer = ({children}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [user, setUser] = useState(null);
  const [userIcon, setUserIcon] = useState(<AccountCircle />);

  const getCurrentUser = async () => {
    try {
      return await Auth.currentAuthenticatedUser();
    } catch (e) {
      console.error(e);
      return null;
    }
  }
  useEffect(() => {
    const updateUserCallback = async () => {
      setUser(await getCurrentUser());
    };
    Hub.listen("auth", updateUserCallback);
    updateUserCallback();
    return () => Hub.remove("auth", updateUserCallback);
  }, []);

  useEffect(() => {
    if (!user) {
      // TODO: update user photo
      setUserIcon(<AccountCircle />);
    }
  }, [user])

  const handleUserMenu = (event) => {
    setAnchorEl(event.currentTarget);
  }

  const handleUserMenuClose = () => {
    setAnchorEl(null);
  }

  const UserMenuItems = ({user}) => {
    if (Boolean(user)) {
      return <>
        <MenuItem sx={{color: "gray"}}>{user.getUsername()}</MenuItem>
        <MenuItem onClick={async () => {
          await Auth.signOut();
          handleUserMenuClose();
        }}>Sign out</MenuItem>
      </>;
    } else {
      return <MenuItem onClick={handleUserMenuClose}><Link href="/signin">Sign In</Link></MenuItem>;
    }
  }

  return <Box>
        <AppBar position="static" sx={{ marginBottom: "10px" }}>
          <Toolbar>
            <Typography variant="h4" component="div" sx={{flexGrow: 1}}>
              TripId
            </Typography>
            <div>
              <IconButton
                onClick={handleUserMenu}
                size="large"
                color="inherit"
                aria-haspopup="true"
              >
                  {userIcon}
              </IconButton>
              <Menu
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                anchorOrigin={{vertical: "bottom", horizontal: "left"}}
                transformOrigin={{vertical: "bottom", horizontal: "left"}}
                onClose={handleUserMenu}
                keepMounted
              >
                <UserMenuItems user={user} />
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
        {children}
      </Box>
}

export default AppContainer;