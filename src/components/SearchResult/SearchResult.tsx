import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FlightIcon from '@material-ui/icons/Flight';
import EuroIcon from '@material-ui/icons/Euro';
import InfoIcon from '@material-ui/icons/Info';
import WbSunnyIcon from '@material-ui/icons/WbSunny';

import { SearchResultProps } from './types';
import useStyles from './styles';

export default function SearchResult(props: SearchResultProps) {
  const classes = useStyles();

  if (props.error) {
    return (
      <Card>
        <CardHeader title={`Flight to ${props.error.flightDestination}`} />
        <CardContent className={classes.error}>
          {props.error.message}
        </CardContent>
      </Card>
    );
  }

  if (!props.destinationInfo) {
    return null;
  }

  const {
    flightDestination,
    flightDuration,
    flightPrice,
    forecastHeadline,
    minTemperature,
    maxTemperature,
  } = props.destinationInfo;

  return (
    <Card>
      <CardHeader title={`Flight to ${flightDestination}`} />
      <CardContent>
        <List component="nav" aria-label="main mailbox folders">
          <ListItem>
            <ListItemIcon className={classes.flightIcon}>
              <FlightIcon />
            </ListItemIcon>
            <ListItemText primary={`Flight duration: ${flightDuration}`} />
          </ListItem>
          <ListItem>
            <ListItemIcon className={classes.euroIcon}>
              <EuroIcon />
            </ListItemIcon>
            <ListItemText primary={`Price: ${flightPrice}`} />
          </ListItem>
          <ListItem>
            <ListItemIcon className={classes.infoIcon}>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary={`Today: ${forecastHeadline}`} />
          </ListItem>
          <ListItem>
            <ListItemIcon className={classes.wbSunnyIcon}>
              <WbSunnyIcon />
            </ListItemIcon>
            <ListItemText primary={`Today: Min - ${minTemperature}, Max - ${maxTemperature}`} />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  )
}