import React from 'react';
import './App.css';
import HomePage from './components/homePage';
import { Route, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <HomePage />
    </Router>
  );
}

export default App;
