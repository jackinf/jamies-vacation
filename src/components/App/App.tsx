import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

import ApiTokenConfigurator from '../ApiTokenConfigurator';
import Search from '../Search';
import { Card } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  section: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  }
}));

function App() {
  const classes = useStyles();

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Jamie's Vacation <span role="img" aria-label="palmtree">🌴</span>
            </Typography>
          </Toolbar>
        </AppBar>

        <Container maxWidth="md">
          <div className={classes.section}>
            <Card>
              <CardContent>
                This app will help you decide which office is better for you
              </CardContent>
            </Card>
          </div>
          <div className={classes.section}>
            <ApiTokenConfigurator />
          </div>
          <div className={classes.section}>
            <Search destinations={[
              {cityName: 'Amsterdam', countryID: 'NL', iataCode: 'AMS'},
              {cityName: 'Budapest', countryID: 'HU', iataCode: 'BUD'},
              {cityName: 'Madrid', countryID: 'ES', iataCode: 'MAD'},
            ]} />
          </div>
        </Container>
      </div>
    </MuiPickersUtilsProvider>
  );
}

export default App;
