import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';

//component imports
import MainCont from './mainCont';
import NavBar from './navBar';

function HomePage() {
  return (
    <Router>
      <NavBar />
      <MainCont/>
    </Router>
  );
}

export default HomePage;
