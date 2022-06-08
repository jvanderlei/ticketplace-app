import styled from 'styled-components'
import { defaultTheme as theme } from '../../../styles/theme'

export const Header = styled.header`
  background-color: ${theme.colors.dark};
  padding: 20px 0;
`

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1440px;
    margin: auto;
    padding: 10px;

    > * {
      display: flex;
      font-size: 14px;
      font-weight: thin;
      color: ${theme.colors.light};
      text-decoration: none;
    }

`