import React, { useState } from 'react'
import * as S from './styles'
import {
  BiSearch,
  BiUser,
  BiCart,
  BiHeart,
  BiPackage
} from 'react-icons/bi'
import FakeLogo from '../../../assets/images/png/FakeLogo.png'
import { ButtonAtom } from '../../Atoms'

const Navbar = () => {

  const [ user, setUser ] = useState(false)

  // TODO: ADD CONTEXT USER TO VERIFY USER IS LOGGED; 
  // TOKEN && (NavItem)
  // !TOKEN && (Buttons -> Login and Register)

  const handleLogin = () => {
    setUser(true)
  }

  return (
    <S.NavbarWrapper>
      <S.NavbarBrand href="/">
        <img src={FakeLogo} />
      </S.NavbarBrand>
      <S.NavbarSearch>
        <input type="search" placeholder="Search in the market" />
        <button>
          <BiSearch />
        </button>
      </S.NavbarSearch>
      <S.NavbarNavigation>
        <S.NavbarList>
          {user && (
            <>
              <S.NavbarItem>
                <S.Link href="/buys">
                  <BiPackage />
                </S.Link>
              </S.NavbarItem>
              <S.NavbarItem>
                <S.Link href="/favorites">
                  <BiHeart />
                </S.Link>
              </S.NavbarItem>
              <S.NavbarItem>
                <S.Link href="/kart">
                  <BiCart />
                </S.Link>
              </S.NavbarItem>
              <S.NavbarItem>
                <S.Link href="profile">
                  <BiUser />
                </S.Link>
              </S.NavbarItem>
            </>
          )}
          {!user && (
            <>
              <ButtonAtom title="Entrar" onClick={handleLogin}/>
              <ButtonAtom title="Registrar" backgroundColor="transparent" isDark/>
            </>
          )}
        </S.NavbarList>
      </S.NavbarNavigation>
    </S.NavbarWrapper>
  )
}

export default Navbar