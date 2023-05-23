import styled from "styled-components"
import HomePage from "./pages/HomePage/HomePage"
import SessionsPage from "./pages/SessionsPage/SessionsPage"
import SeatsPage from "./pages/SeatsPage/SeatsPage"
import SuccessPage from "./pages/SuccessPage/SuccessPage"
import { useState } from "react"
import axios from "axios"

export default function App() {

    axios.defaults.headers.common['Authorization'] = 'UqDNr1vMuiRxXaMyk5kaWHGj';

    const [filmName, setFilmName] = useState('');
    const [filmDay, setFilmDay] = useState('');
    const [filmTime, setFilmTime] = useState('');
    const [tickets, setTickets] = useState([]);
    const [buyerName, setBuyerName] = useState('');
    const [buyerCPF, setBuyerCPF] = useState('');

    const seatInfos = {
        tickets: tickets, 
        setTickets: setTickets,
        buyerName: buyerName,
        setBuyerName: setBuyerName, 
        buyerCPF: buyerCPF,
        setBuyerCPF: setBuyerCPF
    }
    const sucessInfos = {
        tickets: tickets, 
        filmName: filmName, 
        filmDay: filmDay, 
        filmTime: filmTime, 
        buyerName: buyerName, 
        buyerCPF: buyerCPF
    }


    return (
        <>
            <NavContainer>CINEFLEX</NavContainer>

            <HomePage setFilmName={setFilmName}/>
            {/* <SessionsPage setFilmDay={setFilmDay} setFilmTime={setFilmTime}/> */}
            {/* <SeatsPage seatInfos={seatInfos}/> */}
            {/* <SuccessPage sucessInfos={sucessInfos}/> */}
        </>
    )
}

const NavContainer = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #C3CFD9;
    color: #E8833A;
    font-family: 'Roboto', sans-serif;
    font-size: 34px;
    position: fixed;
    top: 0;
    a {
        text-decoration: none;
        color: #E8833A;
    }
`
