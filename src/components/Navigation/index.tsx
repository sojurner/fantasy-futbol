import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/register">SignUp</NavLink>
    <NavLink to="/login">Login</NavLink>
    <NavLink to="/players">Browse</NavLink>
  </nav>
);

export default Navigation;
