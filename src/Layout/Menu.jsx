import React from 'react';

const Menu = (props) => {
    return (
        <div className='navbar'>
            <h1>
                <a href='http://localhost:3000/'>TicketPlace</a>
            </h1>

            <div>
                <h2><a href='http://localhost:3000/'>Ingressos</a></h2>
                <h2><a href='http://localhost:3000/'>Meus ingressos comprados</a></h2>
                <h2><a href='http://localhost:3000/'>Nova venda</a></h2>
                <h2><a href='http://localhost:3000/'>Meus ingressos a venda</a></h2>
                <h2><a href='http://localhost:3000/login'>Usuario</a></h2>
            </div>
        </div>
    )
}

export default Menu