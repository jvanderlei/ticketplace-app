import styled from 'styled-components'
import { defaultTheme as theme } from '../../styles/theme'

export const Wrapper = styled.div`
  border-radius: 8px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  padding: 20px;
`

export const Header = styled.div`
  max-width: 250px;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #e6e6e6;
  align-items: center;
`

export const HeaderBtn = styled.button`
  color: ${theme.colors.primary};
  position: relative;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  transition: all .10s;

  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 100%;
    left: 0;
    width: 0;
    height: 2px;
    background: ${theme.colors.primary};
    transition: all .5s
  }

  &:hover {	
    &:after {
      width: 100%;
    }
  }
  
`

export const Divider = styled.div`
  width: 1px;
  height: 20px;
  background: #e6e6e6;
`

export const TicketsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 20px;
  min-height: calc(100vh - 483px);
`

export const Loading = styled.div`
  animation: rotate 1.5s linear infinite; 
  max-width: 30px;
  text-align: center;
  margin: 0 auto;
  
  }
  @keyframes rotate{
    to{ transform: rotate(360deg); }
  }
`

export const Tickets = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 20px;
  width: 100%;
`

export const Error = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  font-size: 20px;
  color: ${theme.colors.primary};
`