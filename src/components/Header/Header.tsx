import React from 'react';
import AppBar from '@material-ui/core/AppBar/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import useStyles from './styles';

export default function Header() {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Jamie's Vacation <span role="img" aria-label="palmtree">🌴</span>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}