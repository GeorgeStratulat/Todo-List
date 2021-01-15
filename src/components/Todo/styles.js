import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  paper: {
    padding: 0,
    margin: 'auto',
    textAlign: 'center',
    color: theme.palette.text.secondary,
    maxWidth: 680,
    minWidth: 340,
    width: '100%',
    height: '80vh',
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    margin: theme.spacing(2),
  },
  subtitle: {
    margin: theme.spacing(2),
    marginTop: 0,
  }
}));