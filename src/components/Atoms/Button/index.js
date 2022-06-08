import React from 'react'
import * as S from './styles'

const ButtonAtom = ({ title, onClick, backgroundColor }) => {
  return (
      <S.Button onClick={onClick} backgroundColor={backgroundColor}>
        {title}
      </S.Button>
  )
}

export default ButtonAtom