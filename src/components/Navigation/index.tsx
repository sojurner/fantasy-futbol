import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import ExitToApp from '@material-ui/icons/ExitToApp';
import PersonAdd from '@material-ui/icons/PersonAdd';
import FindInPage from '@material-ui/icons/FindInPage';

const links = [
  { path: 'register', icon: PersonAdd },
  { path: 'login', icon: ExitToApp },
  { path: 'players', icon: FindInPage }
];

const Navigation = ({ loggedIn }) => {
  const navigation = links.map((link, index) => {
    if (loggedIn) {
      return (
        <>
          {link.path !== 'register' && (
            <Link to={`/${link.path}`}>
              <IconButton
                key={`link-${index}`}
                aria-owns={open ? 'menu-appbar' : undefined}
                color="inherit"
              >
                <link.icon />
              </IconButton>
            </Link>
          )}
        </>
      );
    } else {
      return (
        <IconButton
          key={`link-${index}`}
          component={Link}
          to={`/${link.path}`}
          aria-owns={open ? 'menu-appbar' : undefined}
          color="inherit"
        >
          <link.icon />
        </IconButton>
      );
    }
  });
  return <>{navigation}</>;
};

const mapStateToProps = state => ({
  loggedIn: state.user
});

export default connect(mapStateToProps)(Navigation);
