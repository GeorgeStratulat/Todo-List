import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { useRouter } from "next/router";
import useStyles from "./styles";
import TodoAdd from "../../containers/TodoAddContainer";
import TodoList from "../../containers/TodoListContainer";
import TodoSearch from "../../containers/TodoSearchContainer";

// App main container
export default function Todo() {
  const classes = useStyles();
  const router = useRouter();
  const { id } = router.query;

  return (
    <Paper className={classes.paper}>
      <Typography variant="h5" component="h1" className={classes.title}>
        Todo List
      </Typography>
      <Typography variant="caption" component="p" className={classes.subtitle}>
        A list of tasks to be completed by our cool developers.
      </Typography>
      {id ? (
        <>
          {/* <TodoSearch /> */}
          <TodoAdd />
          <TodoList id={id} />
        </>
      ) : (
        <Typography
          variant="caption"
          component="p"
          className={classes.subtitle}
        >
          Please append an id in the query string. The new url should look like:
          "localhost:3000?id=2"
        </Typography>
      )}
    </Paper>
  );
}
