import React from "react";
import useStyles from "./styles";
import List from "@material-ui/core/List";
import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";

import TodoListItem from "../../containers/TodoListItemContainer";

export default function TodoList({ getTodoList, todos, loading, id }) {
  const classes = useStyles();
  React.useEffect(() => {
    getTodoList(id);
  }, []);

  return (
    <List component="nav" aria-label="todo list items" className={classes.list}>
      {todos.map((item, index) => (
        <TodoListItem key={index} item={item} />
      ))}
      {loading ? (
        <Box className={classes.backdrop}>
          <CircularProgress color="inherit" />
        </Box>
      ) : null}
    </List>
  );
}
