import React, { useState } from 'react';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/user';

const Register = ({ registerUser }) => {
  const [password, setPassword] = useState('');
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [fullname, setFullname] = useState('');

  const handleRegistration = event => {
    registerUser();
  };

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'password':
        setPassword(value);
        return;
      case 'username':
        setUserName(value);
        return;
      case 'fullname':
        setFullname(value);
        return;
      default:
        setEmail(value);
        return;
    }
  };

  return (
    <form onSubmit={handleRegistration}>
      <input
        placeholder="Fullname"
        onChange={handleChange}
        value={fullname}
        name="fullname"
        type="text"
      />
      <input
        placeholder="Username"
        onChange={handleChange}
        value={username}
        name="username"
        type="text"
      />

      <input
        placeholder="Email"
        onChange={handleChange}
        value={email}
        name="email"
        type="email"
      />
      <input
        placeholder="Password"
        onChange={handleChange}
        value={password}
        name="password"
        type="password"
      />
    </form>
  );
};

const mapDispatchToProps = dispatch => ({
  registerUser: registrationInfo => dispatch(registerUser(registrationInfo))
});

export default connect(
  null,
  mapDispatchToProps
)(Register);
