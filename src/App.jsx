import React from 'react';
import { AccessRoutes, AppRoutes } from './routes'
import { BrowserRouter as Router } from 'react-router-dom'


function App() {
  return (
    <>
      <Router>
        <AccessRoutes />
        <AppRoutes />
      </Router>
    </>
  );
}

export default App;
