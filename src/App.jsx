import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import Menu from "./layout/Menu"
import Content from './layout/Content'


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
