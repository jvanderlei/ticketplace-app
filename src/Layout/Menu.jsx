import React from 'react';
import { Header } from '../components'

const Menu = (props) => {
  return (
    <>
      <Header />
      <div className='navbar'>
        <h1>
          <a href='/'>TicketPlace</a>
        </h1>
        <div>
          <ul>
            <li><a href='/tickets-to-sell'>Ingressos</a></li>
            <li><a href='/my-tickets-buy'>Meus ingressos comprados</a></li>
            <li><a href='/new-ticket'>Nova venda</a></li>
            <li><a href='/my-tickets-sell'>Meus ingressos a venda</a></li>
            <li> <a href='/login'>Usuario</a></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Menu