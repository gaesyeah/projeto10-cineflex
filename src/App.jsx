import axios from "axios";
import { useRef } from "react";
import { Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import backArrow from "./assets/backArrow.png";
import HomePage from "./pages/HomePage/HomePage";
import ErrorPage from "./pages/OtherPage/ErrorPage";
import NotFoundPage from "./pages/OtherPage/NotFoundPage";
import SeatsPage from "./pages/SeatsPage/SeatsPage";
import SessionsPage from "./pages/SessionsPage/SessionsPage";
import SuccessPage from "./pages/SuccessPage/SuccessPage";

export default function App() {

    axios.defaults.headers.common['Authorization'] = 'UqDNr1vMuiRxXaMyk5kaWHGj';

    const navigate = useNavigate();
    const {pathname} = useLocation();

    const filmNameRef = useRef(undefined);
    const filmDayRef = useRef(undefined);
    const filmTimeRef = useRef(undefined);

    return (
        <>
            <NavContainer>
                {(pathname !== '/' && pathname !== '/sucesso' && pathname !== '/404' && pathname !== '/requestError')
                    &&
                    <div 
                        onClick={() => navigate(-1)}
                        data-test="go-home-header-btn"
                    >
                        <img src={backArrow} alt='back'/>
                    </div>
                }
                CINEFLEX
            </NavContainer>

            <Routes>
                <Route path='/' element={<HomePage filmNameRef={filmNameRef}/>}/>
                <Route path='/sessoes/:idSession' element={<SessionsPage filmDayRef={filmDayRef} filmTimeRef={filmTimeRef}/>}/> 
                <Route path='/assentos/:idSeat' element={<SeatsPage filmNameRef={filmNameRef}/>}/>
                <Route path='/sucesso' element={<SuccessPage filmNameRef={filmNameRef} filmDayRef={filmDayRef} filmTimeRef={filmTimeRef}/>}/>

                <Route path='*' element={<Navigate to='/404'/>}/>
                <Route path='/404' element={<NotFoundPage/>}/>

                <Route path='/requestError' element={<ErrorPage />}/>
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
    z-index: 1;
    div{
        cursor: pointer;
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
    }
`