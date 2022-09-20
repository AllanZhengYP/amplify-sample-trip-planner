import { Box, Card, CardContent, CardHeader, Grid, IconButton, TextField } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import { useEffect, useState, useRef } from "react";
import { API, graphqlOperation } from "aws-amplify";

import styles from "./UserInfo.module.css";
import * as mutations from "../src/graphql/mutations";
import * as queries from "../src/graphql/queries";

const UserInfo = ({ user }) => {
  const [ preferredName, setPreferredName ] = useState("UNKNOWN");
  const [ homeAirport, setHomeAirport ] = useState("UNKNOWN");
  const [ email, setEmail ] = useState("UNKNOWN");
  const [ company, setCompany ] = useState("UNKNOWN");
  const [inEdit, setInEdit] = useState(false);
  const newPreferredName = useRef();
  const newCompany = useRef();

  useEffect(() => {
    const loadUserInfo = async () => {
      setEmail(user.attributes?.email ?? "UNKNOWN");
      setHomeAirport(user.attributes?.["custom:homeAirport"] ?? "UNKNOWN");
      const userId = user.getUsername();
      // TODO: change to DataStore. This is for familiarizing the API
      const userInfo = await API.graphql(graphqlOperation(queries.getUser, { id: userId }));
      setPreferredName(userInfo?.data?.getUser?.preferredName ?? "UNKNOWN");
      setCompany(userInfo?.data?.getUser?.company ?? "UNKNOWN");
    }
    loadUserInfo();
    return () => {};
  }, [user])

  // Should use DataStore. But use the GraphQL API module to get familiar with the API
  const handleSaveInfo = async () => {
    const input = {
      id: user.getUsername()
    };
    if (newCompany.current.value?.length > 0 &&  newCompany.current.value !== company) {
      input.company = newCompany.current.value;
    }
    if (newPreferredName !== null && newPreferredName !== preferredName) {
      input.preferredName = newPreferredName.current.value;
    }
    try {
      await API.graphql(graphqlOperation(mutations.updateUser, {input}));
      if (input.company) {
        setCompany(input.company);
      }
      if (input.preferredName) {
        setPreferredName(input.preferredName);
      }
    } catch (error) {
      console.error(error);
    }
  }
  
  const handleUserInfoEdit = () => {
    setInEdit(!inEdit);
    if (inEdit) {
      handleSaveInfo();
    }
  }

  const EditableText = ({content, label, inEdit, textInputRef}) => {
    // const handleTextValueChange = (e) => {
    //   hookSetAction(e.target.value);
    // }
    if (!inEdit) {
      return <div>{content}</div>;
    } else {
      return <TextField label={label} disabled={!inEdit} /*onChange={handleTextValueChange}*/ inputRef={textInputRef}></TextField>;
    }
  }

  const EditOrSaveButten = ({inEdit}) => {
    return inEdit? <SaveIcon /> : <EditIcon /> ;
  }

  //TODO: use form here
  return <Card variant="outlined" sx={{padding: "30px"}}>
    <CardHeader action={<IconButton aria-label="edit" onClick={handleUserInfoEdit}>
      <EditOrSaveButten inEdit={inEdit} />
    </IconButton>} />
    <CardContent>
    <Box sx={{float: "left"}}>
      <Grid container spacing={0}>
        <Grid item={true} className={styles.grid_userInfoItem} xs={6}><b>Preferred Name</b></Grid>
        <Grid item={true}className={styles.grid_userInfoItem} xs={6}>
          <EditableText content={preferredName} label="Preferred Name" inEdit={inEdit} textInputRef={newPreferredName}/>
        </Grid>
        <Grid item={true}className={styles.grid_userInfoItem} xs={6}><b>Email</b></Grid>
        <Grid item={true}className={styles.grid_userInfoItem} xs={6}>{email}</Grid>
        <Grid item={true}className={styles.grid_userInfoItem} xs={6}><b>Home Airport</b></Grid>
        <Grid item={true}className={styles.grid_userInfoItem} xs={6}>{homeAirport}</Grid>
        <Grid item={true}className={styles.grid_userInfoItem} xs={6}><b>Company</b></Grid>
        <Grid item={true}className={styles.grid_userInfoItem} xs={6}>
          <EditableText content={company} label="Company" inEdit={inEdit} textInputRef={newCompany}/>
        </Grid>
      </Grid>
    </Box>
    </CardContent>
  </Card>
}

export default UserInfo