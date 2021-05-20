import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useForm, Controller } from "react-hook-form";
import styles from "./index.module.css";
const { v4: uuidv4 } = require("uuid");
var dateFormat = require("dateformat");
// var now = new Date();

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),

    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "40vw",
    },
    "& .MuiButtonBase-root": {
      margin: theme.spacing(2),
      backgroundColor: "snow",
      color: "black",
      fontWeight: "bold",
      textDecoration: "none",
      border: "none",
      borderRadius: "2px",
      userSelect: "none",
      fontFamily: "Montserrat, sans-serif",
      cursor: "pointer",
      boxShadow: "-5px 5px 0px 0px var(--purple)",
      transition: "0.2s ease-in",
      touchAction: "manipulation",
      padding: "8px 15px 10px",
    },
    "& .MuiButtonBase-root:hover": {
      boxShadow: "0px 3px 1px 1px var(--purple)",
      backgroundColor: "var(--panel-mid-shade)",
    },
  },
}));

const Form = ({ handleClose, postNewComment }) => {
  const [comment, setComment] = useState({});
  const classes = useStyles();
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    let newData = {
      ...data,
      uuid: uuidv4(),
      date: dateFormat(new Date(), "d mmmm, yyyy"),
    };
    console.log(newData);
    if (
      newData.name &&
      newData.country &&
      newData.email &&
      newData.uuid &&
      newData.date &&
      newData.comment
    ) {
      console.log("valid");
      postNewComment(newData);
    }
  };

  return (
    <div className={styles.newCommentContainer}>
      <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="name"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              label="Name"
              variant="filled"
              value={value}
              onChange={onChange}
              error={!!error}
              helperText={error ? error.message : null}
            />
          )}
          rules={{ required: "Please add your name." }}
        />
        <Controller
          name="country"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              label="Country"
              variant="filled"
              value={value}
              onChange={onChange}
              error={!!error}
              helperText={error ? error.message : null}
            />
          )}
          rules={{ required: "Please add your country." }}
        />
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              label="Email"
              variant="filled"
              value={value}
              onChange={onChange}
              error={!!error}
              helperText={error ? error.message : null}
              type="email"
            />
          )}
          rules={{ required: "Please add your email." }}
        />
        <Controller
          name="comment"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              label="Message"
              variant="filled"
              value={value}
              onChange={onChange}
              error={!!error}
              helperText={error ? error.message : null}
              type="name"
            />
          )}
          rules={{ required: "Please add a comment." }}
        />
        <div>
          <Button variant="contained" onClick={handleClose}>
            Cancel
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Post
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Form;
