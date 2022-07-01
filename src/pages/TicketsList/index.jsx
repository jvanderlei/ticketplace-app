import React from 'react'
import { useState, useEffect } from 'react'
import Blank from '../../assets/images/png/noImage.png'
import { Card } from '../../components'
import { GET } from '../../services/apiconnect'
import { useParams } from 'react-router-dom'
import * as S from './style'


const TicketsList = () => {
  const [events, setEvents] = useState([])
  let { search } = useParams()
  useEffect(() => {
    GET(search ? `tickets/search/${search}` : "tickets/")
      .then(data => {
        console.log(data)
        setEvents(data.tickets)
      })
  }, [])


  return (
    <div>
      <S.Title>Eventos Procurados</S.Title>
      <S.Populares>
        {events &&
          events.map(({ id, ticketImage, eventName, value, categoryId }) => (
            <Card
              eventID={id}
              image={ticketImage || Blank}
              eventName={eventName}
              price={value}
              category={categoryId}
            />
          ))
        }
        {events.length === 0 && (
          <S.Error>
            <p>No tickets found in this moment</p>
          </S.Error>
        )}
      </S.Populares>
    </div>
  )
}

export default TicketsList