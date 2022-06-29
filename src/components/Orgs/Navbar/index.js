import React, { useState, useContext } from 'react'
import { AuthLogoutService } from '../../../services/AuthService'
import { UserContext } from '../../../context/UserContext'
import * as S from './styles'
import {
  BiSearch,
  BiUser,
  BiCart,
  BiHeart,
  BiPackage,
  BiPlus
} from 'react-icons/bi'
import FakeLogo from '../../../assets/images/png/FakeLogo.png'
import { ButtonAtom } from '../../Atoms'

const Navbar = () => {

  const { user } = useContext(UserContext)
  const { token } = user

  const handleLogout = async () => {
    const logout = await AuthLogoutService(token)

    if (logout.status === 200) {
      localStorage.removeItem('TICKETPLACE@TOKEN')
      window.location.reload()
    }

  }

  return (
    <S.Nav>
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
            {token && (
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
                  <S.Link href="/cart">
                    <BiCart />
                  </S.Link>
                </S.NavbarItem>
                <S.NavbarItem>
                  <S.Link>
                    <BiUser />
                  </S.Link>
                  <S.DropwdownList>
                    <S.DropwdownItem>
                      <S.Link href="profile">
                        Profile
                      </S.Link>
                    </S.DropwdownItem>
                    <S.DropwdownItem>
                      <S.Link onClick={handleLogout}>
                        Logout
                      </S.Link>
                    </S.DropwdownItem>
                  </S.DropwdownList>
                </S.NavbarItem>
              </>
            )}
            {!token && (
              <>
                <a href="/login">
                  <ButtonAtom title="Entrar" />
                </a>
                <a href="/register">
                  <ButtonAtom title="Registrar" backgroundColor="transparent" isDark />
                </a>
              </>
            )}
          </S.NavbarList>
        </S.NavbarNavigation>
      </S.NavbarWrapper>
    </S.Nav>
  )
}

export default Navbar