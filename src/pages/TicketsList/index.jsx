import React from 'react'
import { useState, useEffect } from 'react'
import { Card } from '../../components'
import { GET } from '../../services/apiconnect'
import { useParams } from 'react-router-dom'
import * as S from './style'


const TicketsList = () => {
  const [events, setEvents] = useState([])
  let { search } = useParams()
  useEffect(() => {
    GET(search?`tickets/search/${search}`: "tickets/")
      .then(data => {
        setEvents(data.tickets)
      })
  })


  return (
    <div>
      <S.Title>Eventos Procurados</S.Title>
      <S.Populares>
        {events.map(({ eventID, image, eventName, price, category }) => (
          <Card
            eventID={eventID}
            // image={image}
            // eventName={eventName}
            price={price}
            category={category}
          />
        ))}</S.Populares>
    </div>
  )
}

export default TicketsList