import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'

const PublicRoute = ({ children }) => {
  const { token } = useContext(UserContext)

  return token ? <Navigate to='/'/> :  children
}

export default PublicRoute