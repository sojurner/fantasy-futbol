import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Navigation from '../Navigation';
import Routes from '../Routes';
import Header from '../Header';
import Register from '../Register';
const App = () => {
  return (
    <Router>
      <>
        <Header />
        <Routes />
        {/* <Register /> */}
      </>
    </Router>
  );
};

export default App;
