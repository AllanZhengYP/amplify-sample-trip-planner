import { Button, TextareaAutosize, TextAreaField, TextField } from "@mui/material";
import { Input, InputLabel } from "@mui/material";
import { Box } from "@mui/system"
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import { format } from 'date-fns';
import 'react-day-picker/dist/style.css';
import { API, graphqlOperation } from "aws-amplify";
import { useAuthenticator } from "@aws-amplify/ui-react";

import * as mutations from "../src/graphql/mutations";

const TripInfo = ({ trip }) => {
  const now = Date.now();
  const [selected, setSelected] = useState({
    from: now,
    to: now
  });
  const { user } = useAuthenticator(context => [context.user]);

  const handleCreate = async (e) => {
    e.preventDefault();
    await API.graphql(graphqlOperation(mutations.createItinarary, {
      input: {
        id: "mock-id",
        destinationCity: e.target.destinationCity.value,
        name: e.target.name.value,
        description: e.target.description.value,
        startDate: format(selected.from, "yyyy-MM-dd"),
        endDate: format(selected.to, "yyyy-MM-dd"),
        userID: user.getUsername()
      }
    }))
  }

  const handleSave = async (e) => {
    e.preventDefault();
  };

  return <Box component="form" onSubmit={trip ? handleSave : handleCreate}>
    <div>
      <TextField name="destinationCity" label="Destination City" required defaultValue={trip?.destinationCity ?? ""} />
      <TextField name="name" label="Name" defaultValue={trip?.name ?? ""}/>
      <Box component="div">
      <InputLabel htmlFor="Description">Description</InputLabel>
      <TextareaAutosize name="description" label="Description" defaultValue={trip?.description ?? ""}/>
      </Box>
      <Box component="div" sx={{display: "flex", justifyContent: "space-between"}}>
        <Box component="div">
          <InputLabel htmlFor="startDate">Start Date</InputLabel>
          <Input name="startDate" id="startDate" value={format(selected.from, "PP")} />
        </Box>
        <Box component="div">
          <InputLabel htmlFor="endDate">End Date</InputLabel>
          <Input name="endDate" id="endDate" value={format(selected.to, "PP")} />
        </Box>
        <DayPicker mode="range" selected={selected} onSelect={setSelected} />
      </Box>
    </div>
    <Box component="div">
      <Button variant="outlined">Cancel</Button>
      <Button variant="contained" type="submit">{trip ? "Save" : "Create"}</Button>
    </Box>
  </Box>;
}

export default TripInfo