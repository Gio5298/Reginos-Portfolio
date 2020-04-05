import React from 'react';
import NavBar from './navBar';
import { Route, BrowserRouter as Router } from 'react-router-dom';

function HomePage() {
  return (
    <Router>
      <NavBar />
    </Router>
  );
}

export default HomePage;
