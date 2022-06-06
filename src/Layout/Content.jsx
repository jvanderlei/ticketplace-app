import { React } from 'react'
import { Routes, Route } from 'react-router-dom'

import Login from '../Business/Login'
import Register from '../Business/Register'
import TicketsList from '../Business/TicketsList'

const Content = props => {
    return (
        <>
            <main className='content'>
                <Routes>
                    {/* <Route path="/" element={<TicketsList />} /> */}
                    <Route path="/login" element={<Login />} />
                    {/* <Route path="/register" element={<Register />} /> */}
                    {/* <Route path="/ticket:ticketid" element={<Register />} /> */}
                    {/* <Route path='/usertickets' element={<TicketsBoughtPerUser />} /> */}
                    {/* <Route path='/ticketstosell' element={<TicketsToSellPerUser />} /> */}
                    {/* <Route exact path="/ticket/:id" element={<Ticket/>} /> */}
                </Routes>
            </main>
        </>
    )
}

export default Content