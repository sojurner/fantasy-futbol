import React from 'react';
import { Link } from 'react-router-dom';
import { IconButton } from '@material-ui/core';
import Home from '@material-ui/icons/Home';
import ExitToApp from '@material-ui/icons/ExitToApp';
import PersonAdd from '@material-ui/icons/PersonAdd';
import FindInPage from '@material-ui/icons/FindInPage';

const links = [
  { path: 'register', icon: PersonAdd },
  { path: 'login', icon: ExitToApp },
  { path: 'players', icon: FindInPage }
];

const Navigation = () => {
  const navigation = links.map((link, index) => (
    <IconButton
      key={`link-${index}`}
      component={Link}
      to={`/${link.path}`}
      aria-owns={open ? 'menu-appbar' : undefined}
      color="inherit"
    >
      <link.icon />
    </IconButton>
  ));
  return <>{navigation}</>;
};

export default Navigation;
