import styled from 'styled-components'

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: span 3;
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  background: #f8f8f8;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  transition: all 0.1s linear;

  &&:hover {
    transform: scale(1.02);
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  }
`
export const ImageWrapper = styled.div`
  width: 100%;
  height: 150px;
`

export const Image = styled.img`
  width:100%;
  min-height: 150px;
  height:100%;
  object-fit: cover;
  object-position: center;
`
export const Infos = styled.div`
  padding: 10px;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  gap: 10px;
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

export const Title = styled.h4``

export const Price = styled.p `
  font-weight: thin;
  font-size: 20px;
`