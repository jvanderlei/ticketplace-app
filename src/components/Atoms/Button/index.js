import React from 'react'
import * as S from './styles'

const ButtonAtom = ({ title, onClick, backgroundColor, isDark, fullWidth }) => {
  return (
      <S.Button onClick={onClick} backgroundColor={backgroundColor} isDark={isDark} fullWidth={fullWidth} >
        {title}
      </S.Button>
  )
}

export default ButtonAtom