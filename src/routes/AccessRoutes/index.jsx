import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { PublicRoute } from '../index'
import { Login, Register } from '../../pages'

const AccessRoutes = () => {
  return (
    <Routes>
      <Route
        exact
        path="/login"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />
      <Route
        exact
        path="/register"
        element={
          <PublicRoute>
            <Register />
          </PublicRoute>
        }
      />
    </Routes>
  )
}

export default AccessRoutes