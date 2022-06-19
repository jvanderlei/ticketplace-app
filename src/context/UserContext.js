import React, { useState } from 'react'

export const UserContext = React.createContext({});

export const UserProvider = ({ children, ...props })  => {

  const [user, setUser] = useState({
    token: localStorage.getItem('token')
  })

  return (
    <UserContext.Provider value={{ user, setUser }}>
      { children }
    </UserContext.Provider>
  )
}