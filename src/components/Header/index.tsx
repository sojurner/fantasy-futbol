import React from 'react';
import { Link } from 'react-router-dom';
import { IconButton, AppBar, Toolbar, Typography } from '@material-ui/core';
import { withStyles, createStyles } from '@material-ui/core/styles';
import Navigation from '../Navigation';

const styles = createStyles({
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  }
});

const Header = ({ classes }) => {
  return (
    <div className={classes.root}>
      <AppBar position="sticky">
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            className={classes.grow}
            variant="headline"
            color="inherit"
          >
            FANTASY FUTBOL
          </Typography>
          <Navigation />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(Header);
