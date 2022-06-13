import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import Layout from "./components/Orgs/Layout/Layout"
import Content from './routes/Content'


function App() {
  return (
    <>
      <Router>
        <Layout>
          <Content />
        </Layout>
      </Router>
    </>
  );
}

export default App;
