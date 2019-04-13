import { makeStyles } from '@material-ui/styles';

export const formStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  container: {
    width: '40rem',
    margin: 'auto'
  },
  item: {
    width: 'inherit'
  },
  itemSmall: {
    width: '100%'
  },
  input: {
    textAlign: 'center',
    width: 'inherit',
    color: 'black'
  },
  button: {
    textAlign: 'center'
  },
  iconSmall: {
    fontSize: 20
  }
}));
