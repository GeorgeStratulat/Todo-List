import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(2),
    display: "flex",
    flex: 1,
    alignItems: "center",
  },
  input: {
    width: "100%",
    flex: 1,
    padding: theme.spacing(1),
    paddingLeft: theme.spacing(2),
  },
  iconButton: {
    padding: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginLeft: 0,
  },
  listItemText: {
    flex: 1,
  },
  root: {
    border: "1px solid black",
  },
}));
