import React from 'react'
import * as S from './style'

const InputAtom = ({ type, placeholder, name, value, onChange, label }) => {
  return (
    <div>
      <S.InputWrapper>
        {label && (
          <S.Label>{label}</S.Label>
        )}
        <S.InputComponent
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </S.InputWrapper>
    </div>
  )
}

export default InputAtom