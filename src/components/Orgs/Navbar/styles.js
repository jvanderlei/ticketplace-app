import styled from 'styled-components'
import { defaultTheme as theme } from '../../../styles/theme'

export const NavbarWrapper = styled.div`
  display: flex;
  gap: 100px;
  justify-content: space-between;
  align-items: center;
  max-width: 1440px;
  margin: auto;
  padding: 10px;
  border-bottom: 1px solid #cbd5e1
`

export const NavbarBrand = styled.a`
  img {
    max-width: 70px;
  }
`
export const NavbarSearch = styled.div`
  width: 100%;
  background: ${theme.colors.primary};
  display: flex;
  border: 2px solid ${theme.colors.primary};
  border-radius: 8px;

  > * {
    padding: 10px;
    border: none;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${theme.colors.primary};
    color: ${theme.colors.light};
    font-size: 20px;
    cursor: pointer;
  }

  input {
    width: 100%;
    outline: none;
    border-radius: 8px;
    background: ${theme.colors.white};
  }
`

export const NavbarNavigation = styled.nav``
export const NavbarList = styled.ul`
  display: flex;
  gap: 10px;
  justify-content: space-between;
`

export const NavbarItem = styled.li`
  list-style: none;
  border-radius: 8px;
  border: 1px solid #cbd5e1;
`

export const Link = styled.a`
  cursor: pointer;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  color: ${theme.colors.dark};

  &&:hover {
    color: ${theme.colors.primary}
  }
`