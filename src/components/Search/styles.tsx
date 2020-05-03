import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      marginBottom: theme.spacing(1),
      width: '25ch',
    },
  },
  progressBars: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  section: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  gridItem: {
    width: '100%',
  }
}));