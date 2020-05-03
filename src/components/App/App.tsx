import React from 'react';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

import useStyles from './styles';
import Header from '../Header';
import Main from '../Main';
import ApiTokenProvider from '../../providers/ApiTokenProvider';

function App() {
  const classes = useStyles();

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <ApiTokenProvider>
        <div className={classes.root}>
          <Header />
          <Main />
        </div>
      </ApiTokenProvider>
    </MuiPickersUtilsProvider>
  );
}

export default App;
