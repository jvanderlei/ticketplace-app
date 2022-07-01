import React from 'react'
import * as S from './style'
import { ButtonAtom } from '../../index'
import NoImage from  '../../../assets/images/png/noImage.png'
import { Categories } from '../../../utils/CategoryMap'

const Card = ({ eventID, image, eventName, price, category, toSell }) => {

  const moneyFormat = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });

  const categoryName = Categories[category]

  return (
    <S.CardWrapper>
      <S.ImageWrapper>
        <S.Image src={image ?? NoImage} alt="Event image" />
      </S.ImageWrapper>
      <S.Infos>
        <S.Category>{categoryName}</S.Category>
        <S.Title>{eventName}</S.Title>
        <S.Price>{moneyFormat.format(price)}</S.Price>
        <a href={`/ticket/${eventID}`}>
          <ButtonAtom title="Comprar" fullWidth />
        </a>
      </S.Infos>
    </S.CardWrapper>
  )
}

export default Card