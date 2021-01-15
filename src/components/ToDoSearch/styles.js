import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  button: {
    width: "10rem",
    alignSelf: "center",
  },
  paper: {
    margin: theme.spacing(2),
    display: "flex",
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
}));
