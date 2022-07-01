import styled from 'styled-components'
import { defaultTheme as theme } from '../../styles/theme'

export const TicketWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  border-radius: 8px;
  margin: auto;
  justify-content: space-between;
  overflow: hidden;
  background: #f8f8f8;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);

`
export const ImageWrapper = styled.div`
  width: 100%;
  height: 450px;
`

export const Image = styled.img`
  width:100%;
  min-height: 150px;
  height:100%;
  object-fit: cover;
  object-position: center;
`
export const Infos = styled.div`
  width: 100%;
  padding: 30px;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  gap: 10px;

`

export const PaymentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  width: 100%;
`

export const Buy = styled.div`
  text-transform: uppercase;
  display: flex;
  justify-content: end;
  border-radius: 8px;
  max-width: max-content;
  gap: 10px;
  background: #DCDCDC;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  transition: all 0.1s linear;

  &&:hover {
    transform: scale(1.02);
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  }
`

export const Category = styled.p`
  width: max-content;
  border-radius: 5px;
  background: #808080;
  font-size: 12px;
  color: #fff;
  padding: 3px 10px;
  text-transform: uppercase;
`

export const Description = styled.p`
  width: 100%;
  font-size: 16px;
`

export const Title = styled.h1`
  margin:auto;
  `

export const Price = styled.p`
  margin: auto;
  font-weight: thin;
  font-size: 20px;
  padding: 0 20px;
`
export const Address = styled.p`
  margin-top: 30px;
  width: 100%;
  font-size: 16px;
`


export const PaymentWarning = styled.div`
  display: flex;
  max-width: max-content;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: 10px;
  border-radius: 8px;
  background: ${theme.colors.primary};
`