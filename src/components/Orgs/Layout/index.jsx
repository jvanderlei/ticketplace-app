import React from 'react';
import * as S from './styles'
import { Header, Navbar, Footer } from '../..'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Navbar />
      <S.Container>
        {children}
      </S.Container>
      <Footer />
    </>
  )
}

export default Layout