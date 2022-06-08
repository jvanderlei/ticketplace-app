import React from 'react';

const Menu = (props) => {
  return (
    <div className='navbar'>
      <h1>
        <a href='http://localhost:3000/'>TicketPlace</a>
      </h1>

      <div>
        <ul>
          <li><a href='/'>Ingressos</a></li>
          <li><a href='/'>Meus ingressos comprados</a></li>
          <li><a href='/'>Nova venda</a></li>
          <li><a href='/'>Meus ingressos a venda</a></li>
          <li> <a href='/login'>Usuario</a></li>
          <li></li>
        </ul>
      </div>
    </div>
  )
}

export default Menu