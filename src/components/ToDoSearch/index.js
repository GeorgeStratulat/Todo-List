import React from "react";
import Paper from "@material-ui/core/Paper";
import Tooltip from "@material-ui/core/Tooltip";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import useStyles from "./styles";

export default function TodoSearch({ setSearch, errorCatcher }) {
  const classes = useStyles();

  const [searchWord, setSearchWord] = React.useState("");

  const onChangeInput = ({ target: { value } }) => setSearchWord(value);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearch(searchWord);
    setSearchWord("");
  };

  //   React.useEffect(() => {
  //     let timer = null;
  //     let seconds = 2;
  //     if (error) {
  //       timer = setInterval(() => {
  //         seconds -= 1;
  //         if (seconds < 0) {
  //           clearInterval(timer);
  //           errorCatcher("");
  //         }
  //       }, 1000);
  //     }
  //     return () => {
  //       clearInterval(timer);
  //     };
  //   }, [error]);

  return (
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
        value={searchWord}
        onChange={onChangeInput}
      />
      <Tooltip title="add todo" placement="top">
        <IconButton
          type="submit"
          aria-label="add"
          className={classes.iconButton}
        >
          <SearchIcon />
        </IconButton>
      </Tooltip>
    </Paper>
  );
}
