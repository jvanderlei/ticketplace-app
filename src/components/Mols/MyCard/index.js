import React from 'react'
import * as S from './style'
import { BsFillGearFill, BsTrashFill } from 'react-icons/bs'
import { getUserIdByToken } from '../../../utils/DecodedToken'
import { DELETE } from '../../../services/apiconnect'
import NoImage from '../../../assets/images/png/noImage.png'
import { Categories } from '../../../utils/CategoryMap'

const MyCard = ({ eventID, image, eventName, price, category, toSell }) => {

  const moneyFormat = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });

  const categoryName = Categories[category]


  const deleteMyTicket = async () => {
    const userId = await getUserIdByToken(localStorage.getItem('TICKETPLACE@TOKEN'));

    const response = await DELETE(`/tickets/${eventID}`).then(data => {
      window.location.reload();
    }).catch(error => {
      console.log(error)
    });
  }

  return (
    <S.CardWrapper toSell={toSell} href={toSell && `/ticket/${eventID}`}>
      <S.ImageWrapper>
        <S.Image src={image ?? NoImage} alt="Event image" />
      </S.ImageWrapper>
      <S.Infos>
        <S.Category>{categoryName}</S.Category>
        <S.Title>{eventName}</S.Title>
        <S.Price>{moneyFormat.format(price)}</S.Price>
      </S.Infos>
      {toSell && (
        <S.EditCardWrapper>
          <S.EditCard href={`/new/${eventID}`}>
            <BsFillGearFill />
          </S.EditCard>
          <S.EditCard onClick={deleteMyTicket}>
            <BsTrashFill />
          </S.EditCard>
        </S.EditCardWrapper>
      )}
      {!toSell && (
        <S.Warning>
          <p>FINALIZADO!</p>
        </S.Warning>
      )}
    </S.CardWrapper>
  )
}

export default MyCard