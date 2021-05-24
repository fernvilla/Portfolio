import React from 'react';
import { Home, Navbar, Portfolio } from './';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './../site.css';

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Portfolio />
    </>
  );
};

export default App;
