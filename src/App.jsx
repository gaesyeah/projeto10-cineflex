import styled from "styled-components";
import backArrow from "./assets/backArrow.png";
import HomePage from "./pages/HomePage/HomePage";
import SessionsPage from "./pages/SessionsPage/SessionsPage";
import SeatsPage from "./pages/SeatsPage/SeatsPage";
import SuccessPage from "./pages/SuccessPage/SuccessPage";
import { useState, useRef } from "react";
import axios from "axios";
import {Routes, Route, useNavigate} from "react-router-dom";

export default function App() {

    axios.defaults.headers.common['Authorization'] = 'UqDNr1vMuiRxXaMyk5kaWHGj';

    const navigate  = useNavigate();

    const filmNameRef = useRef(undefined);
    const filmDayRef = useRef(undefined);
    const filmTimeRef = useRef(undefined);

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
        filmNameRef: filmNameRef,
        filmDayRef: filmDayRef, 
        filmTimeRef: filmTimeRef, 
        tickets: tickets,
        setTickets: setTickets,
        buyerName: buyerName,
        setBuyerName: setBuyerName,
        buyerCPF: buyerCPF,
        setBuyerCPF: setBuyerCPF
    }

    return (
        <>
            <NavContainer>
                {(window.location.pathname !== '/')
                    &&
                    <div>
                        <img onClick={() => navigate(-1)} src={backArrow} alt='back'/>
                    </div>
                }
                CINEFLEX
            </NavContainer>

            <Routes>
                <Route path='/' element={<HomePage filmNameRef={filmNameRef}/>}/>
                <Route path='/sessoes/:idSession' element={<SessionsPage filmDayRef={filmDayRef} filmTimeRef={filmTimeRef}/>}/> 
                <Route path='/assentos/:idSeat' element={<SeatsPage seatInfos={seatInfos}/>}/>
                <Route path='/sucesso' element={<SuccessPage sucessInfos={sucessInfos}/>}/>
            </Routes>
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
    div{
        height: 40px;
        border-radius: 100%;
        position: absolute;
        left: 0px;
        margin-left: 16px;
        &:hover{
            background-color: #E5E5E5;
        }
    }
    img{
        margin-top: 4px;
        width: 40px;
        cursor: pointer;
    }
`