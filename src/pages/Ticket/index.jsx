import React, { useState, useEffect } from 'react'
import { Categories } from '../../utils/CategoryMap'
import Blank from '../../assets/images/png/noImage.png'
import { useParams, useNavigate } from 'react-router-dom'
import * as S from './style'
import { ButtonAtom } from '../../components/Atoms/'
import { GET, PATCH } from '../../services/apiconnect'



const Ticket = () => {
  let { tickedId } = useParams()
  const navigate = useNavigate()

  const [ticket, setTicket] = useState({})
  const [sucess, setSucess] = useState(false)
  const { id, eventName, ticketImage, description, time, date, address, value, categoryId } = ticket
  const CategoryMap = Categories[categoryId]

  const moneyFormat = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })

  const handleBuyTicket = async () => {
    const data = {
      ticketId: id,
    }
    await PATCH(`userTickets/buy/${id}`, JSON.stringify(data))
      .then(data => {
        setSucess(true)
        setInterval(() => {
          navigate('/')
        }, 2000)
      }).catch(err => {
        console.log(err)
      });
  }

  useEffect(() => {
    GET(`tickets/${tickedId}`)
      .then(data => {
        console.log(data.ticket)
        const { id, eventName, categoryId, ticketImage, description, time, date, address, value } = data.ticket
        console.log(id)
        setTicket({ id, eventName, categoryId, ticketImage, description, time, date, address, value })
      }).catch(err => {
        console.log(err)
      })

  }, [])


  return (
    <S.TicketWrapper>
      {sucess && (
        <S.PaymentWarningWrapper className={sucess && 'visible'} sucess={sucess}>
          <S.PaymentWarning>
            Compra realizada com sucesso!
          </S.PaymentWarning>
        </S.PaymentWarningWrapper>
      )}
      <S.ImageWrapper>
        <S.Image src={ticketImage || Blank}></S.Image>
      </S.ImageWrapper>
      <S.Infos>
        <S.Title>{eventName}</S.Title>
        <S.Category>{CategoryMap}</S.Category>
        <S.Address><b>{address}</b></S.Address>
        <S.Description>{description}</S.Description>
        <S.PaymentWrapper>
          <S.Buy>
            <S.Price>{moneyFormat.format(value)}</S.Price>
            <ButtonAtom title="Comprar" fullWidth onClick={handleBuyTicket} />
          </S.Buy>
        </S.PaymentWrapper>
      </S.Infos>
    </S.TicketWrapper>
  )
}

export default Ticket