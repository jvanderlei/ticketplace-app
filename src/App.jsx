import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import Menu from "./Layout/Menu"
import Content from './Layout/Content'


function App() {
  return (
    <>
      <Router>
        <Menu />
        <Content />
      </Router>
    </>
  );
}

export default App;
