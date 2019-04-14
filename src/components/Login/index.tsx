import React from 'react';
import {
  Button,
  TextField,
  InputAdornment,
  IconButton,
  Typography
} from '@material-ui/core';
import LockSharp from '@material-ui/icons/LockSharp';

const Login = () => {
  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('');
  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'password':
        setPassword(value);
        return;
      case 'email':
        setEmail(value);
        return;
    }
  };

  return (
    <>
      <Typography
        style={{ textAlign: 'center', marginTop: '1rem' }}
        variant={'h2'}
      >
        LOGIN
      </Typography>
      <form
        style={{
          height: '80vh',
          width: '100vw',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <TextField
          style={{ width: '50%', margin: '4rem auto .5rem auto' }}
          variant={'outlined'}
          type={'text'}
          label={'email'}
          name={'email'}
          value={email}
          onChange={handleChange.bind(event)}
        />
        <TextField
          style={{ width: '50%', margin: '.5rem auto ' }}
          variant={'outlined'}
          type={'password'}
          label={'Password'}
          name={'password'}
          value={password}
          onChange={handleChange.bind(event)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton aria-label="Toggle password visibility">
                  <LockSharp />
                </IconButton>
              </InputAdornment>
            )
          }}
        />
        <Button style={{ width: '50%', margin: '2rem auto' }}>SUBMIT</Button>
      </form>
    </>
  );
};

export default Login;
