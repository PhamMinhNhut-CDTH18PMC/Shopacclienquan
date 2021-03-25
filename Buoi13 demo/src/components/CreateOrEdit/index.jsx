import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Radio,
  Paper,
  FormLabel,
  RadioGroup,
  FormControlLabel,
} from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import EditIcon from "@material-ui/icons/Edit";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  radioGroup: {
    flexDirection: "row",
  },
});

export default function CreateOrEdit(props) {
  const classes = useStyles();
  const { isEdit, noteData, changeContent, changeLevel, handleConfirm } = props;

  const handleChangeContent = (event) => {
    changeContent(event);
  };

  const handleChangeLevel = (event) => {
    changeLevel(event);
  };

  const confirm = () => {
    handleConfirm();
  };



  return (
    <Paper variant="outlined">
      <Box p={2}>
        <Box display="flex">
          {isEdit ? (
            <>
              <EditIcon color="primary" />
              <Box pl={1}>
                <Typography
                  variant="body2"
                  style={{ fontWeight: "bold" }}
                  color="primary"
                >
                  Edit note
                </Typography>
              </Box>
            </>
          ) : (
            <>
              <AddCircleIcon color="primary" />
              <Box pl={1}>
                <Typography
                  variant="body2"
                  style={{ fontWeight: "bold" }}
                  color="primary"
                >
                  Add new note
                </Typography>
              </Box>
            </>
          )}
        </Box>
        <Box py={2}>
          <TextField
            value={noteData.content}
            onChange={handleChangeContent}
            label="Content*"
            variant="outlined"
          ></TextField>
        </Box>
        <Box>
          <FormLabel component="legend">Select level</FormLabel>
          <RadioGroup
            className={classes.radioGroup}
            aria-label="gender"
            name="gender1"
            value={noteData.level}
            onChange={handleChangeLevel}
          >
            <FormControlLabel
              value="low"
              control={<Radio color="primary" />}
              label="Low"
              onChange={handleChangeLevel}
            />
            <FormControlLabel
              value="medium"
              control={<Radio color="primary" />}
              label="Medium"
              onChange={handleChangeLevel}
            />
            <FormControlLabel
              value="high"
              control={<Radio color="primary" />}
              label="High"
              onChange={handleChangeLevel}
            />
          </RadioGroup>
        </Box>
        <Box py={1}>
          <Button variant="contained" style={{ marginRight: "16px" }}>
            Cancel
          </Button>
          <Button onClick={confirm} variant="contained" color="primary">
            {isEdit ? "Edit" : "Confirm"}
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}
