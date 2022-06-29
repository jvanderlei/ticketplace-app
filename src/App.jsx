import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { PublicRoute, PrivateRoute } from './routes'
import { Login, Register, Home, TicketsList, Ticket, CreateTicket, Profile } from './pages'
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
            <Home />
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
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
        <Route
          path="/ticket/:tickedId"
          element={
            <PublicRoute>
              <Ticket />
            </PublicRoute>
          } />
        <Route
          path="/new"
          element={
            <PublicRoute>
              <CreateTicket />
            </PublicRoute>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
