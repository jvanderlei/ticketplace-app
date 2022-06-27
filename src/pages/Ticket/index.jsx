import React, { useState, useEffect } from 'react'
import * as S from './style'
import { ButtonAtom } from '../../components/Atoms/'


const Ticket = (eventID) => {
  let mockData = {
    eventID: 1,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIqYGGPbhDhXAEsSOgJ3F3m4SnGBbQl5UfMcp_yk292g&s=10',
    eventName: 'Avril Lavigne - São Paulo',
    address: 'Praça Roberto Gomes Pedrosa, 1 - Morumbi, São Paulo - SP, 05653-070',
    price: 300.00,
    category: 'music',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit qui culpa nobis iste, officiis, excepturi magnam itaque, laudantium ipsum reprehenderit facilis alias dolorum nisi. Quo totam corrupti saepe nostrum enim.Cadeira no Camarote a esquerda do palco, com Open Bar, visão privilegiada e com acesso ao Meet & Greet'
  }

  useEffect(() => {
    // dados sql

  })

  const moneyFormat = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })

  return (
    <S.TicketWrapper>
      <S.ImageWrapper>
        <S.Image src={mockData.image} ></S.Image>
      </S.ImageWrapper>
      <S.Infos>
        <S.Category>{mockData.category}</S.Category>
        <S.Title>{mockData.eventName}</S.Title>
        <S.Address><b>{mockData.address}</b></S.Address>
        <S.Description>{mockData.description}</S.Description>
      </S.Infos>
      <S.Buy>
        <S.Price>{moneyFormat.format(mockData.price)}</S.Price>
        <a href={`/ticket/${eventID}`}>
          <ButtonAtom title="Comprar" fullWidth />
        </a>
      </S.Buy>
    </S.TicketWrapper>
  )
}

export default Ticket