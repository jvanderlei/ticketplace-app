import styled from 'styled-components'

export const SliderWrapper = styled.div`
  width: 100%;
  min-height: 300px;
  border-radius: 8px;
  padding: 10px;
  position: relative;
  ${({ visible }) => !visible && 'display: none'};
  overflow: hidden;
`

export const CloseBtn = styled.button`
  position: absolute;
  right: 10px;
  background: none;
  border: none;
  font-size: 22px;
  cursor: pointer;
  color: #f2f2f2;
  z-index: 10;
`

export const ImageContainer = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: .3s ease;
  transform: translateX(${props => -props.transform * 100}%);
`

export const Image = styled.img`
  min-width: 100%;
  border-radius: 8px;
  object-fit: cover;
`

export const Controls = styled.button`
  position: absolute;
  top: calc(50% - 15px);
  font-size: 30px;
  border: 0;
  line-height: 0;
  ${({ direction }) => direction + ': 10px'};
  z-index: 10;
  color: #f2f2f2;
  background: none;
  ${({ direction }) => direction === 'left' && 'transform: rotate(180deg)'};
  cursor: pointer;
`