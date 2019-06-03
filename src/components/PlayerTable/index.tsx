import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import PlayerTablePagination from '../TablePagination';
import { withStyles } from '@material-ui/core/styles';
import { cleanPlayers } from '../../utils/scraper';

const _lengthWithoutID: number = 8;
const styles = () => ({
  table: {
    minWidth: 700,
    borderCollapse: 'collapse',
    width: '100%'
  },
  cellRoot: {
    position: 'sticky',
    top: '0',
    background: '#5f6c82',
    color: 'white',
    zIndex: 1000,
    fontSize: '1rem',
    padding: '5px 40px 5px 16px'
  },
  cellRoot2: {
    padding: '5px 40px 5px 16px'
  }
});

const PlayerTable = props => {
  const { classes } = props;
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(25);
  const [playerState, setPlayerState] = React.useState([]);
  const [playerKeys, setPlayerKeys] = React.useState([]);
  const playerInfo = useSelector(state => state.players);
  const requestPlayers = useDispatch();

  React.useEffect(() => {
    const players = cleanPlayers(playerInfo.players[page + 1]);
    const playerKeys = Object.keys(players[0]);
    playerKeys.length = 8;
    setPlayerKeys(playerKeys);
    setPlayerState(players);
  }, [playerInfo]);

  const handleChangePage = (event: any, newPage: number) => {
    if (!playerInfo.players[newPage + 1]) {
      requestPlayers({ type: 'REQUEST_PLAYERS', pageNumber: newPage + 1 });
    } else {
      const players = cleanPlayers(playerInfo.players[newPage + 1]);
      setPlayerState(players);
    }
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(event.currentTarget.value);
  };

  return (
    <Table className={classes.table}>
      <TableHead>
        <TableRow
          style={{
            overflowY: 'auto',
            height: '50px'
          }}
        >
          {playerKeys.map(header => (
            <TableCell className={classes.cellRoot} key={header} align={'left'}>
              {header}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {playerState.map((player: any) => {
          const truncatedValues = Object.values(player);
          truncatedValues.length = _lengthWithoutID;
          return (
            <TableRow key={player.id}>
              {truncatedValues.map((val, key) => {
                return typeof val === 'string' && val.includes('http') ? (
                  <TableCell
                    className={classes.cellRoot2}
                    key={`player-val-${page}-${key}`}
                  >
                    <img src={val} />{' '}
                  </TableCell>
                ) : (
                  <TableCell
                    className={classes.cellRoot2}
                    key={`player-val-${page}-${key}`}
                  >
                    {val}
                  </TableCell>
                );
              })}
            </TableRow>
          );
        })}
      </TableBody>
      <TableFooter>
        <TableRow
          style={{
            borderTop: '1px solid red'
          }}
        >
          <TablePagination
            style={{
              position: 'sticky',
              bottom: '0',
              background: 'white'
            }}
            rowsPerPageOptions={[25]}
            colSpan={8}
            count={playerInfo.count}
            rowsPerPage={rowsPerPage}
            page={page}
            SelectProps={{
              native: true
            }}
            onChangePage={handleChangePage.bind(event)}
            onChangeRowsPerPage={handleChangeRowsPerPage.bind(event)}
            ActionsComponent={PlayerTablePagination}
          />
        </TableRow>
      </TableFooter>
    </Table>
  );
};

export default withStyles(styles)(PlayerTable);
