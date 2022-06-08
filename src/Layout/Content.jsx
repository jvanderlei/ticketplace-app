import { React } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ButtonAtom } from '../components'
import {
    Login,
    Register,
    TicketsList
} from '../pages'

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