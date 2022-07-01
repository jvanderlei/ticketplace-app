import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { PublicRoute, PrivateRoute } from './routes'
import { Login, Register, Home, TicketsList, Ticket, CreateTicket, Profile, MyTickets } from './pages'
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
        <Route path="/tickets">
          <Route index
            element={
              <PublicRoute>
                <TicketsList />
              </PublicRoute>
            } />
          <Route path=':search'
            element={
              <PublicRoute>
                <TicketsList />
              </PublicRoute>
            } />
        </ Route>
        <Route
          path="/ticket/:tickedId"
          element={
            <PrivateRoute>
              <Ticket />
            </PrivateRoute>
          } />
        <Route
          path="/new"
          element={
            <PrivateRoute>
              <CreateTicket />
            </PrivateRoute>
          }
        />
        <Route
          path="/mytickets"
          element={
            <PrivateRoute>
              <MyTickets />
            </PrivateRoute>
          }
        />
      </Route>
    </Routes >
  );
}

export default App;
