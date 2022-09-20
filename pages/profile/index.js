import { useAuthenticator } from "@aws-amplify/ui-react";
import { Box, Button, Grid, IconButton } from "@mui/material";
import Personicon from "@mui/icons-material/Person";
import { Container } from "@mui/system";
import { Storage } from "aws-amplify";
import { useEffect, useState } from "react";

import UserInfo from "../../components/UserInfo";

const Profile = () => {
  const { user: cognitoUser, route } = useAuthenticator(context => [context.user, context.route]);
  const [ user, setUser ] = useState(null);
  const [ userImage, setUserImage ] = useState(null);

  useEffect(() => {
    if (route === "authenticated") {
      setUser(cognitoUser);
    }
    return () => {}
  }, [cognitoUser, route]);

  useEffect(() => {
    const loadUserInfo = async () => {
      if (user) {
        const userId = user.getUsername();
        const fileUrl = await Storage.get(
          `users/${userId}/avatar`, 
          {level: "private"}
        );
        setUserImage(fileUrl);
      }
    }
    loadUserInfo();
    return () => {}
  }, [user]);

  const avatarImg = () => {
    const handleImgLoadError = () => {
      setUserImage(null);
    }
    return userImage ? 
      <img src={userImage} alt="user photo" style={{
        objectFit: "scale-down",
        width: "150px",
        height:"300px"
      }} onError={handleImgLoadError}/> :
      <IconButton sx={{"& svg": { fontSize: 180 }}}>
        <Personicon color="inherit" style={{width: 90}} />
      </IconButton>;
  }
  
  const uploadPhoto = async (e) => {
    const file = e.target.files[0];
    if (file.size > 1024 * 1024) {
      alert("File size cannot exceed 1 MB");
    } else {
      try {
        const { key } = await Storage.put(`users/${cognitoUser.getUsername()}/avatar`, file, {
          level: "private"
        });
        const fileUrl = await Storage.get(key, { level: "private" });
        setUserImage(fileUrl);
      } catch (e) {
        console.error("upload filed");
      }
    }
  }

  return (user ? <Container maxWidth="lg">
    <Box sx={{display: "block"}}>
      <Box  sx={{float: "left", marginRight: "50px"}}>
        <div >
          {avatarImg()}
        </div>
        < input id="photo-upload-file" type="file" accept="image/*" hidden onChange={uploadPhoto} />
        <label htmlFor="photo-upload-file"><Button variant="outlined" component="span">Change Photo</Button></label>
      </Box>
      <UserInfo user={user} />
    </Box>
  </Container> : <h1>No Man</h1>)
  
}

export default Profile;