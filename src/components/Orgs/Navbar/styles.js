import styled from 'styled-components'
import { defaultTheme as theme } from '../../../styles/theme'

export const Nav = styled.div`
  background: #f2f2f2;
  position: sticky;
  top: 0;
  z-index: 999;
  border-bottom: 1px solid #cbd5e1;
`

export const NavbarWrapper = styled.div`
  display: flex;
  gap: 100px;
  justify-content: space-between;
  align-items: center;
  max-width: 1440px;
  margin: auto;
  padding: 10px;

`

export const NavbarBrand = styled.a`
  img {
    max-width: 70px;
  }
`

export const NavbarNavigation = styled.nav``

export const NavbarList = styled.ul`
  display: flex;
  gap: 10px;
  justify-content: space-between;
`

export const DropwdownList = styled.ul`
  position: absolute;
  right: 0;
  top: 100%;
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background: ${theme.colors.white};
  border-radius: 8px;
  cursor: pointer;
  color: ${theme.colors.light};
  transition: all 0.3s ease-in-out;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  z-index: 99;
`

export const Link = styled.a`
  position: relative;
  cursor: pointer;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  color: ${theme.colors.dark};

  &&:hover {
    color: ${theme.colors.primary};
  }
`

export const DropwdownItem = styled.li`
  list-style: none;
  padding: 3px;
  color: ${theme.colors.white};
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  
  &:not(:last-child) {
    border-bottom: 1px solid #cbd5e1;
  }

  &:hover {
    color: #f2f2f2;
  }

  a {
    color: ${theme.colors.primary};
    font-size: 12px;
    text-decoration: none;
  }
`

export const NavbarItem = styled.li`
  position: relative;
  display: flex;
  justify-content: center;
  list-style: none;
  border-radius: 8px;
  border: 1px solid #cbd5e1;

  span {
    background: #808080;
    opacity: 0;
    position: absolute;
    bottom: calc(100% + 7px);
    border-radius: 3px;
    min-width: max-content;
    padding: 2px 10px;
    color: ${theme.colors.white};
    font-size: 10px;
    font-weight: 300;
    transition: all 0.5s ease-in-out;
  }

  span::after {
    content: '';
    position: absolute;
    left: calc(50% - 2.5px);
    bottom: -2.5px;
    width: 5px;
    height: 5px;
    background: ${theme.colors.gray};
    transform: rotate(45deg);
  }

  &:hover {
    ${DropwdownList} {
      display: flex;
      transition: all 1s ease-in-out;
    }

    span {
      opacity: 1;
    }
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

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
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