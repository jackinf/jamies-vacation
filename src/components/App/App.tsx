import React from 'react';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

import useStyles from './styles';
import Header from '../Header';
import Main from '../Main';

function App() {
  const classes = useStyles();

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <div className={classes.root}>
        <Header />
        <Main />
      </div>
    </MuiPickersUtilsProvider>
  );
}

export default App;
