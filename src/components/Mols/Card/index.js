import React from 'react'
import * as S from './style'
import { ButtonAtom } from '../../index'

const Card = ({ eventID, image, eventName, price, category, toSell }) => {

  const moneyFormat = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })

  return (
    <S.CardWrapper>
      <S.ImageWrapper>
        <S.Image src={image} alt="Event image" />
      </S.ImageWrapper>
      <S.Infos>
        <S.Category>{category}</S.Category>
        <S.Title>{eventName}</S.Title>
        <S.Price>{moneyFormat.format(price)}</S.Price>
        <a href={`/ticket/${eventID}`}>
          <ButtonAtom title={toSell? "Comprar" : "Abrir"} fullWidth />
        </a>
      </S.Infos>
    </S.CardWrapper>
  )
}

export default Card