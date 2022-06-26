import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { PublicRoute, PrivateRoute } from './routes'
import { Login, Register, Home, TicketsList } from './pages'
import { Layout } from './components'


function App() {
  return (
    <Routes>
      <Route>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
      </Route>
      <Route element={<Layout />}>
        <Route
          path="/"
          element={
            <PublicRoute>
              <Home />
            </PublicRoute>
          }
        />
        <Route
          path="/tickets"
          element={
            <PrivateRoute>
              <TicketsList />
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
