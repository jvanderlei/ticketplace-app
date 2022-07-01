import React, { useState, useEffect } from 'react'
import { getUserIdByToken } from '../../utils/DecodedToken'
import { MyCard } from '../../components'
import { GET } from '../../services/apiconnect';
import { FaSpinner } from 'react-icons/fa';
import * as S from './styles'

const MyTickets = () => {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState()
  const [toSell, setToSell] = useState(true);
  const [bought, setBought] = useState(false);
  const [tickets, setTickets] = useState([]);

  const token = localStorage.getItem('TICKETPLACE@TOKEN');

  const getToSellTickets = async () => {
    setError(false)
    setLoading(true);

    const userId = await getUserIdByToken(token);
    const response = await GET(`/userTickets/sell/${userId}`).then(data => {
      const { User_Tickets } = data;
      setLoading(false);
      setTickets(User_Tickets);
    }).catch(error => {
      setLoading(false);
      setError(error);
    });
  }

  const getBoughtTickets = async () => {
    setError(false)
    setLoading(true);
    const userId = await getUserIdByToken(token);

    const response = await GET(`/userTickets/bought/${userId}`).then(data => {
      console.log(data)
      const { User_Tickets } = data;
      if (!User_Tickets) {
        setLoading(false);
        setError(true);
      }
      setLoading(false);
      setTickets(User_Tickets);
    }).catch(error => {
      setLoading(false);
      setError(error);
    });
  }

  useEffect(() => {
    getToSellTickets();
  }, [])

  return (
    <S.Wrapper>
      <S.Header>
        <S.HeaderBtn onClick={getToSellTickets}>
          To sell
        </S.HeaderBtn>
        <S.Divider />
        <S.HeaderBtn onClick={getBoughtTickets}>
          History
        </S.HeaderBtn>
      </S.Header>
      <S.TicketsContainer>
        {loading && (
          <S.Loading>
            <FaSpinner size={30} />
          </S.Loading>
        )}
        {error && (
          <S.Error>
            <p>Parece que você nao possui tickets aqui, caso ache que isso é um engano, entre em contato com os desenvolvedores.</p>
          </S.Error>
        )}
        {tickets && (
          <S.Tickets>
            {tickets.map(({
              address,
              eventName,
              id,
              ticketImage,
              value,
              toSell,
              categoryId,
              description,

            }) => <MyCard
                key={id}
                eventID={id}
                address={address}
                eventName={eventName}
                image={ticketImage}
                price={value}
                description={description}
                toSell={toSell}
                category={categoryId}
              />
            )}
          </S.Tickets>
        )}
      </S.TicketsContainer>
    </S.Wrapper>
  )
}


export default MyTickets