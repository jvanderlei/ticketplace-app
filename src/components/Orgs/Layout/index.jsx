import React from 'react';
import * as S from './styles'
import { useOutlet } from 'react-router-dom'
import { Header, Navbar, Footer } from '../..'

const Layout = ({ children }) => {

  const outlet = useOutlet();

  return (
    <>
      <Header />
      <Navbar />
      <S.Container>
        {outlet}
      </S.Container>
      <Footer />
    </>
  )
}

export default Layout