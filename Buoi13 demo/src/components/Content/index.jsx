import {
  Box,
  Grid,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CreateOrEdit from "../CreateOrEdit";
import moment from "moment";
const useStyles = makeStyles((theme) => ({
  table: {
    // minHeight: "250px",
    "& .MuiTableCell-head": {
      fontWeight: "600",
    },
  },
}));
const color = {
  low: "green",
  medium: "yellow",
  high: "red",
};
export default function Content(props) {
  const classes = useStyles();
  const {
    noteList,
    noteData,
    handleEdit,
    handleRemove,
    isEdit,
    isOpenForm,
  } = props;

  const onEdit = (note) => {
    handleEdit(note);
  };

  const onRemove = (note) => {
    handleRemove(note);
  };

  return (
    <Box marginTop="20px">
      <Grid container spacing={2}>
        <Grid item xs={isOpenForm ? 9 : 12}>
          <Paper variant="outlined">
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="caption table">
                <TableHead>
                  <TableRow>
                    <TableCell width="15%">Create at</TableCell>
                    <TableCell width="40%" align="center">
                      Content
                    </TableCell>
                    <TableCell width="15%" align="center">
                      Level
                    </TableCell>
                    <TableCell width="15%" align="center">
                      Status
                    </TableCell>
                    <TableCell width="15%" align="center">
                      Action
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {noteList.map((note, index) => (
                    <TableRow key={index}>
                      <TableCell component="th" scope="row" width="15%">
                        {moment(note.createAt).format("DD/MM/YYYY")}
                      </TableCell>
                      <TableCell align="center" width="40%">
                        {note.content}
                      </TableCell>
                      <TableCell align="center" width="15%">
                        <span style={{ color: color[note.level] }}>
                          {note.level}
                        </span>
                      </TableCell>
                      <TableCell align="center" width="15%">
                        {note.status}
                      </TableCell>
                      <TableCell align="center" width="15%">
                        <IconButton onClick={() => onEdit(note)}>
                          <EditIcon></EditIcon>
                        </IconButton>
                        <IconButton onClick={() => onRemove(note)}>
                          <DeleteIcon></DeleteIcon>
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
        {isOpenForm && (
          <Grid item xs={3}>
            <CreateOrEdit
              isEdit={isEdit}
              handleConfirm={props.handleConfirm}
              changeContent={props.changeContent}
              changeLevel={props.changeLevel}
              noteData={noteData}
            />
          </Grid>
        )}
      </Grid>
    </Box>
  );
}
