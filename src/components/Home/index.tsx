import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import PlayerTable from '../PlayerTable';

const styles = (theme: any) => ({
  root: {
    width: '95%',
    marginTop: theme.spacing.unit * 3,
    overflowY: 'auto',
    height: '100%',
    position: 'fixed',
    margin: '0 2rem',
    width: '95%',
    height: '86%'
  }
});

const Home = props => {
  const { classes } = props;
  const loading = useSelector(state => state.loading);
  const { players } = useSelector(state => state.players);
  const requestPlayers = useDispatch();
  React.useEffect(() => {
    requestPlayers({ type: 'REQUEST_PLAYERS', pageNumber: 1 });
  }, []);
  return (
    <>
      {!players[1] ? (
        <div>...Loading</div>
      ) : (
        <Paper className={classes.root}>
          <PlayerTable />
        </Paper>
      )}
    </>
  );
};

export default withStyles(styles)(Home);
