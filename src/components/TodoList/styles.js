import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  list: {
    flex: 1,
    overflowY: "auto",
    position: "relative",
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
    position: "absolute",
    top: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.2)",
  },
}));
