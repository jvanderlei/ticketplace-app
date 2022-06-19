import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './styles/globalStyles'
import { UserProvider } from './context/UserContext'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <App />
      <GlobalStyle />
    </UserProvider>
  </React.StrictMode>
);
