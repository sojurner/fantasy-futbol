import React, { useState } from 'react';
import { connect } from 'react-redux';
import { registerUser } from '../../utils/apiCalls';
import { setUser } from '../../actions/user';
import { Fab, Grid, InputAdornment, TextField } from '@material-ui/core';
import { LockOutlined, PermIdentity, EmailOutlined } from '@material-ui/icons';
import { formStyles } from '../../utils/styles';

const Register: React.FunctionComponent<{
  className: any;
  history: any;
  setUser: any;
}> = ({ className, history, setUser }) => {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const classes = formStyles();

  const inputList = [
    {
      className: classes.itemSmall,
      xs: 6,
      label: 'Full Name',
      name: 'fullname',
      value: fullName,
      type: 'text',
      icon: PermIdentity
    },
    {
      className: classes.itemSmall,
      xs: 6,
      label: 'Username',
      name: 'username',
      value: username,
      type: 'text',
      icon: PermIdentity
    },
    {
      className: classes.item,
      xs: 12,
      label: 'Email',
      name: 'email',
      value: email,
      type: 'email',
      icon: EmailOutlined
    },
    {
      className: classes.item,
      xs: 12,
      label: 'Password',
      name: 'password',
      value: password,
      type: 'password',
      icon: LockOutlined
    }
  ];

  const handleRegistration = (event: React.FormEvent<HTMLInputElement>) => {
    const { value, name } = event.currentTarget;
    switch (name) {
      case 'fullname':
        setFullName(value);
        return;
      case 'username':
        setUsername(value);
        return;
      case 'email':
        setEmail(value);
        return;
      case 'password':
        setPassword(value);
        return;
      default:
        return value;
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const newUser = { email, password, username, fullName };
    const user = await registerUser(newUser);
    const { status, id, ...userInfo } = user;
    if (status === 200) {
      setUser(userInfo);
      history.push(`/user/${user.id}/home`);
    } else {
      setError('Something went Wrong');
    }
  };

  return (
    <form
      name="register"
      className={classes.root}
      onSubmit={handleSubmit.bind(event)}
    >
      {!error && (
        <Grid className={classes.container} container={true} spacing={8}>
          {inputList.map((field, index) => {
            return (
              <Grid key={`input-${index}`} className={field.className}>
                <TextField
                  className={classes.input}
                  margin="normal"
                  variant="outlined"
                  label={field.label}
                  type={field.type}
                  name={field.name}
                  value={field.value}
                  onChange={handleRegistration.bind(event)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <field.icon />
                      </InputAdornment>
                    )
                  }}
                />
              </Grid>
            );
          })}
          <Grid className={classes.button} xs={12}>
            <Fab
              size="medium"
              color="primary"
              variant="extended"
              onClick={handleSubmit}
            >
              SUBMIT
            </Fab>
          </Grid>
        </Grid>
      )}
      {error && <h1>{error}</h1>}
    </form>
  );
};

const mapDispatchToProps = dispatch => ({
  setUser: userInfo => dispatch(setUser(userInfo))
});

export default connect(
  null,
  mapDispatchToProps
)(Register);
