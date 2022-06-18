import React from 'react';
import * as S from './styles'

const TicketCard = () => {

    <S.TicketCardWrapper>
        <TicketCardImg>
            <img>
            </img>
        </TicketCardImg>
        <TicketCardTitle>
        </TicketCardTitle>
        <TicketCardText>
            <p>Endereço: {address}</p>
            <p>Descrição: {description}</p>
        </TicketCardText>
        <S.TicketCardValue>
            <p>{ticketValue}</p>
        </S.TicketCardValue>
    </S.TicketCardWrapper>
}

export default TicketCard