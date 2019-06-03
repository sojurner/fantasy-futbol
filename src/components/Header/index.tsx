import React from 'react';
import { Link } from 'react-router-dom';
import { IconButton, AppBar, Toolbar, Typography } from '@material-ui/core';
import { withStyles, createStyles } from '@material-ui/core/styles';
import Navigation from '../Navigation';

const styles = createStyles({
  root: {
    flexGrow: 1,
    '& header': {
      color: '#1f3073',
      background: 'none',
      boxShadow: 'none',
      borderBottom: '1px solid #0000003d',
      boxShadow: '1px 0px 1px 2px #00000017'
    }
  },
  grow: {
    width: 'maxContent',
    margin: 'auto auto auto 0',
    fontFamily: 'Impact',
    textDecorationLine: 'none',
    '&:hover': {
      transition: '.3s linear',
      color: '#dcd2ff',
      textShadow: '2px 2px darkslateblue'
    }
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
