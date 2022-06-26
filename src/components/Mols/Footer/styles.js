import styled from 'styled-components'
import { defaultTheme as theme } from '../../../styles/theme'

export const Footer = styled.footer`
  background-color: ${theme.colors.dark};
  padding: 20px 0;
`

export const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`

export const SocialIcon = styled.a`
  height: 40px;
  width: 40px;
  border-radius: 100%;
  background-color: ${theme.colors.light};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 20px;
  padding: 5px;
  color: ${theme.colors.dark};

  &&:hover {
    color: ${theme.colors.primary}
  }
`

export const UtilsLinksWrapper = styled.div`
  padding: 20px 0;
`

export const UtilsLinks = styled.a`
  color: ${theme.colors.light};
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  margin: 3px 0;

  &&:hover {
    color: ${theme.colors.primary};
  }
`

export const Copyright = styled.p`
  color: #cbd5e1;
  text-align: center;
`