import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Navigation from '../Navigation';
import Routes from '../Routes';
import Register from '../Register';
const App = () => {
  return (
    <Router>
      <>
        <Navigation />
        <Register />
      </>
    </Router>
  );
};

export default App;
