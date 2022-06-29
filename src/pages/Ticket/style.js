import styled from 'styled-components'

export const TicketWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 90%;
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
  width: 70%;
  padding: 10px;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  gap: 10px;

`

export const Buy = styled.div`
  width: 26%;
  margin: 2%;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 8px;
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
  margin: 20px 0 0 20px;
  width: 100%;
  font-size: 16px;
`

export const Title = styled.h1`
  padding: 3%;
  margin:auto;
  box-shadow: rgba(40, 119, 238, 0.4) -5px 5px, rgba(	40, 119, 238, 0.3) -10px 10px, rgba(	40, 119, 238, 0.2) -15px 15px, rgba(	40, 119, 238, 0.1) -20px 20px, rgba(	40, 119, 238, 0.05) -25px 25px;`
  // box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;

export const Price = styled.p`
  margin: auto;
  font-weight: thin;
  font-size: 20px;
`
export const Address = styled.p`
  margin-top: 30px;
  width: 100%;
  font-size: 16px;
`