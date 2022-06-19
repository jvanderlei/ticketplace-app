import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Layout } from '../../components'
import { PublicRoute, PrivateRoute } from '../index'
import { Home, TicketsList } from '../../pages'

const AppRoutes = () => {
  return (
    <Layout>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <PublicRoute>
              <Home />
            </PublicRoute>
          }
        />
        <Route
          exact
          path="/tickets"
          element={
            <PrivateRoute>
              <TicketsList />
            </PrivateRoute>
          }
        />
      </Routes>
    </Layout>
  )
}

export default AppRoutes