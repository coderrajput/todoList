import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import { addNote } from "../store/toDoSlice";
import { v4 as uuidv4 } from "uuid";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "50ch"
    }
  },
  button: {
    width: "20ch"
  }
}));

export default function Input() {
  const dispatch = useDispatch();
  const classes = useStyles();
  let [inputVal, setInput] = useState();

  const handleSubmit = () => {
    setInput("");
    let id = uuidv4();
    dispatch(addNote({ id, note: inputVal, complete: false, draggable: true }));
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="standard-basic"
        label="Add a Note"
        value={inputVal}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        onClick={() => handleSubmit()}
      >
        Add
      </Button>
    </form>
  );
}
