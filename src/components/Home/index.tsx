import React from 'react';
import { requestPlayers } from '../../utils/apiCalls';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  table: {
    minWidth: 700
  }
});

const Home = props => {
  const { classes } = props;
  const [playerList, setPlayerList] = React.useState([]);

  React.useEffect(() => {
    getPlayers();
  }, []);

  const getPlayers = async () => {
    const players = await requestPlayers();
    setPlayerList(players);
  };

  console.log(playerList);

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            {playerList.length &&
              Object.keys(playerList[0]).map(header => {
                return (
                  <TableCell key={header} align={'right'}>
                    {header}
                  </TableCell>
                );
              })}
          </TableRow>
        </TableHead>
        <TableBody>
          {playerList.length &&
            playerList.map((player: any) => (
              <TableRow key={player.id}>
                {Object.values(player).map((val, key) => {
                  console.log(val);
                  return typeof val === 'string' && val.includes('http') ? (
                    <TableCell key={`player-val-${key}`}>
                      <img src={val} />{' '}
                    </TableCell>
                  ) : (
                    <TableCell key={`player-val-${key}`}>{val}</TableCell>
                  );
                })}
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default withStyles(styles)(Home);
