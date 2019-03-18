import React, { useState } from 'react';
import { registerUser } from '../../actions/user';
import { withStyles } from '@material-ui/core/styles';
import { Fab, Grid, InputAdornment, TextField } from '@material-ui/core';
import { LockOutlined, PermIdentity, EmailOutlined } from '@material-ui/icons';
import { formStyles } from '../../utils/styles';

const Register = ({ registerUser, classes, className }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const inputList = [
    {
      className: classes.itemSmall,
      xs: 6,
      label: 'First Name',
      name: 'firstName',
      value: firstName,
      type: 'text',
      icon: PermIdentity
    },
    {
      className: classes.itemSmall,
      xs: 6,
      label: 'Last Name',
      name: 'lastName',
      value: lastName,
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
      case 'firstName':
        setFirstName(value);
        return;
      case 'lastName':
        setLastName(value);
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

  const handleSubmit = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    console.log(email, password);
  };

  return (
    <form name="register" className={classes.root} onSubmit={handleSubmit}>
      <Grid className={classes.container} container spacing={8}>
        {inputList.map((field, index) => {
          return (
            <Grid
              key={`input-${index}`}
              item
              className={field.className}
              xs={field.xs}
            >
              <TextField
                className={classes.input}
                margin="normal"
                variant="outlined"
                label={field.label}
                type={field.type}
                name={field.name}
                value={field.value}
                onChange={handleRegistration}
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
        <Grid item xs={12}>
          <Fab
            size="medium"
            color="primary"
            variant="extended"
            className={classes.button}
            onClick={handleSubmit}
          >
            SUBMIT
          </Fab>
        </Grid>
      </Grid>
    </form>
  );
};

const mapDispatchToProps = dispatch => ({
  registerUser: registrationInfo => dispatch(registerUser(registrationInfo))
});

export default withStyles(formStyles)(Register);
