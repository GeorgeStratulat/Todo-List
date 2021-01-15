import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import CancelIcon from "@material-ui/icons/Cancel";
import PlusIcon from "@material-ui/icons/Add";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import useStyles from "./styles";

export default function TodoAdd({ createTodo }) {
  const classes = useStyles();
  const [title, setTitle] = React.useState("");
  const [isAdding, setIsAdding] = React.useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    createTodo({
      title,
      completed: false,
    });
    setTitle("");
    onChangeIsAdding();
  };

  const cancelSubmit = (event) => {
    event.preventDefault();
    setTitle("");
    onChangeIsAdding();
  };

  const onChangeInput = ({ target: { value } }) => setTitle(value);
  const onChangeIsAdding = () => setIsAdding(!isAdding);

  // if user is about to add, render textfield and make button disappear
  return (
    <>
      {isAdding ? (
        <Button
          className={classes.button}
          variant="outlined"
          startIcon={<PlusIcon />}
          onClick={onChangeIsAdding}
        >
          Add item
        </Button>
      ) : (
        <Paper
          component="form"
          variant="outlined"
          className={classes.paper}
          onSubmit={handleSubmit}
        >
          <InputBase
            placeholder="Todo item title"
            inputProps={{ "aria-label": "todo item title" }}
            className={classes.input}
            value={title}
            onChange={onChangeInput}
          />
          <Tooltip title="add todo" placement="top">
            <IconButton
              type="submit"
              aria-label="add"
              className={classes.iconButton}
            >
              <PlusIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="cancel todo" placement="top">
            <IconButton
              type="submit"
              aria-label="cancel"
              onClick={cancelSubmit}
              className={classes.iconButton}
            >
              <CancelIcon />
            </IconButton>
          </Tooltip>
        </Paper>
      )}
    </>
  );
}
