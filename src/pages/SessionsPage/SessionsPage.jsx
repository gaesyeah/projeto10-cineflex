import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Session from "../../components/Session";
import Loading from "../../style/Loading";
import loadingGif from "./../../assets/loading.gif";

export default function SessionsPage({filmDayRef, filmTimeRef}) {

    const [sessionList, setSessionList] = useState(null);

    const navigate = useNavigate();

    const {idSession} = useParams();
    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${idSession}/showtimes`)
        .then(sucess => setSessionList(sucess.data))
        .catch(error => {
            const {message} = error.response.data;
            const {status, statusText} = error.response;
            navigate('/requestError', {state: {message, status, statusText}})
        })
    }, []);

    if (sessionList === null){
        return (
            <Loading>
                <img src={loadingGif} alt='loading'/>
            </Loading>
        );
    }else{
        const {days, posterURL, title} = sessionList;

        return (
            <PageContainer>
                Selecione o horário
                <div>
                    {days.map(day => 
                        <Session 
                            day={day} 
                            key={day.id}
                            filmDayRef={filmDayRef}
                            filmTimeRef={filmTimeRef}
                        />
                    )}
                </div>
    
                <FooterContainer data-test="footer">
                    <div>
                        <img src={posterURL} alt="poster" />
                    </div>
                    <div>
                        <p>{title}</p>
                    </div>
                </FooterContainer>
    
            </PageContainer>
        );
    }
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Roboto';
    font-size: 24px;
    text-align: center;
    color: #293845;
    margin-top: 30px;
    padding-bottom: 120px;
    padding-top: 70px;
    div {
        margin-top: 20px;
    }
`

const FooterContainer = styled.div`
    width: 100%;
    height: 120px;
    background-color: #C3CFD9;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 20px;
    position: fixed;
    bottom: 0;

    div:nth-child(1) {
        box-shadow: 0px 2px 4px 2px #0000001A;
        border-radius: 3px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
        margin: 12px;
        img {
            width: 50px;
            height: 70px;
            padding: 8px;
        }
    }

    div:nth-child(2) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        p {
            margin-top: -18px;
            text-align: left;
            &:nth-child(2) {
                margin-top: 10px;
            }
        }
    }
`