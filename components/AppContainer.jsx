import { Amplify, API, graphqlOperation, Storage } from 'aws-amplify';
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import { useEffect, useState } from "react";
import { useAuthenticator } from "@aws-amplify/ui-react";
import Link from "next/link";
import { useRouter } from "next/router";

import awsExports from "../src/aws-exports";
import * as queries from "../src/graphql/queries";
import { Avatar } from '@mui/material';
Amplify.configure(awsExports);

const AppContainer = ({children}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { user, signOut, route } = useAuthenticator(context => [context.user, context.route]);
  const [userIcon, setUserIcon] = useState(<AccountCircle />);
  const router = useRouter();
  const [ preferredName, setPreferredName ] = useState(null);

  useEffect(() => {
    const loadUserInfo = async () => {
      if (!user) {
        setUserIcon(<AccountCircle />);
      } else {
        const avatarSrc = await Storage.get(
          `users/${user.getUsername()}/avatar`,
          { level: "private", track: true }
        );
        setUserIcon(<Avatar src={avatarSrc}>{preferredName}</Avatar>);
      }
    }

    const loadPreferredName = async () => {
      if (user) {
        const userInfo = await API.graphql(graphqlOperation(queries.getUser, {id: user.getUsername()}));
        setPreferredName(userInfo.data?.getUser?.preferredName);
      }
    }

    loadUserInfo();
    loadPreferredName();
    return () => {};
  }, [user]);

  useEffect(() => {
    if (route === "signOut") {
      router.replace("/");
    }
  }, [route]);

  const handleUserMenu = (event) => {
    setAnchorEl(event.currentTarget);
  }

  const handleUserMenuClose = () => {
    setAnchorEl(null);
  }

  const UserMenuItems = ({user}) => {
    if (Boolean(user)) {
      return <>
        <MenuItem sx={{color: "gray"}}>
          <Link href='/profile'><a>{ preferredName }</a></Link>
        </MenuItem>
        <MenuItem onClick={async () => {
          signOut();
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
        <Link href={"/"}>
          <Typography variant="h4" component="div" sx={{flexGrow: 1}}>TripId</Typography>
        </Link>
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
            onClose={handleUserMenuClose}
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