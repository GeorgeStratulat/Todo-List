import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import Checkbox from "@material-ui/core/Checkbox";
import InputBase from "@material-ui/core/InputBase";
import Paper from "@material-ui/core/Paper";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import DoneIcon from "@material-ui/icons/Done";
import CancelIcon from "@material-ui/icons/Cancel";

import useStyles from "./styles";

export default function TodoListItem({ item, updateTodo, deleteTodo }) {
  const classes = useStyles();
  const [completed, setCompleted] = React.useState(item.completed);
  const [editable, setEditable] = React.useState(false);
  const [title, setTitle] = React.useState(item.title || "");

  const onChangeInput = ({ target: { value } }) => setTitle(value);
  const onChangeEditable = () => setEditable(!editable);

  const handleSubmitInput = (event) => {
    event.preventDefault();
    if (title) {
      updateTodo(item.id, {
        ...item,
        title,
      });
      setEditable(false);
    } else {
      setTitle(item.title);
    }
  };

  const onChangeCompleted = () => {
    updateTodo(item.id, {
      ...item,
      completed: !completed,
    });
    setCompleted(!completed);
  };

  const onDelete = () => {
    deleteTodo(item.id);
  };

  return (
    <ListItem
      button
      style={{ backgroundColor: completed ? "lightgreen" : "red" }}
      className={classes.listItem}
    >
      <ListItemIcon>
        <Tooltip title="Complete" placement="top">
          <Checkbox
            edge="start"
            tabIndex={-1}
            color="default"
            checked={completed}
            onClick={onChangeCompleted}
            inputProps={{ "aria-labelledby": "check-1" }}
          />
        </Tooltip>
      </ListItemIcon>
      {editable ? (
        <EditInput
          title={title}
          handleSubmitInput={handleSubmitInput}
          onChangeInput={onChangeInput}
          kek
          classes={classes}
        />
      ) : (
        <ListItemText primary={title} className={classes.listItemText} />
      )}
      <Tooltip title="Edit" placement="top">
        <IconButton edge="end" aria-label="edit" onClick={onChangeEditable}>
          <EditIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Delete" placement="top">
        <IconButton edge="end" aria-label="delete" onClick={onDelete}>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
    </ListItem>
  );
}

// edit text input
const EditInput = ({
  title,
  handleSubmitInput,
  onChangeEditable,
  onChangeInput,
  classes,
}) => (
  <Paper
    component="form"
    variant="outlined"
    className={classes.paper}
    onSubmit={handleSubmitInput}
  >
    <InputBase
      inputProps={{ "aria-label": "todo item title" }}
      className={classes.input}
      value={title}
      onChange={onChangeInput}
    />
    {title ? (
      <Tooltip title="edit todo" placement="top">
        <IconButton
          type="submit"
          aria-label="edit"
          className={classes.iconButton}
        >
          <DoneIcon />
        </IconButton>
      </Tooltip>
    ) : null}
    <Tooltip title="cancel edit todo" placement="top">
      <IconButton
        type="submit"
        aria-label="cancel"
        onClick={onChangeEditable}
        className={classes.iconButton}
      >
        <CancelIcon />
      </IconButton>
    </Tooltip>
  </Paper>
);
