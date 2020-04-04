import React from 'react';
import './App.css';
import NavBar from './components/navBar';
import { Route, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavBar />
    </Router>
  );
}

export default App;
