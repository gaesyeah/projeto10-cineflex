import { cpf } from "cpf-cnpj-validator";
import { useEffect } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function SuccessPage({filmNameRef, filmDayRef, filmTimeRef}) {
    if (useLocation().state === null){
        return <Navigate to="/"/>
    }
    if (!filmNameRef.current){
        return <Navigate to="/"/>
    }

    const {seatList, buyedTickets, buyerName, buyerCPF} = useLocation().state;

    const navigate = useNavigate();

    useEffect(()=> {
        filmNameRef.current = undefined;
        filmDayRef.current = undefined;
        filmTimeRef.current = undefined;
    }, [])

    return (
            <PageContainer>
                <h1>Pedido feito <br/> com sucesso!</h1>
            <TextContainer data-test="movie-info">
                <strong><p>Filme e sessão</p></strong>
                <p>{filmNameRef.current}</p>
                <p>{filmDayRef.current} {filmTimeRef.current}</p>
            </TextContainer>

            <TextContainer data-test="seats-info">
                <strong><p>Ingressos</p></strong>
                {seatList.seats.map(seat => {
                    if (buyedTickets.includes(seat.id)){
                        return (
                            <p key={seat.id}>
                                Assento {seat.name.padStart(2, '0')}
                            </p>
                        )
                    }
                })}
            </TextContainer>

            <TextContainer data-test="client-info">
                <strong><p>Comprador</p></strong>
                <p>Nome: {buyerName}</p>
                <p>CPF: {cpf.format(buyerCPF)}</p>
            </TextContainer>

                <button 
                    onClick={() => navigate('/')} 
                    data-test="go-home-btn"
                >Voltar para Home
                </button>
        </PageContainer>
    );
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto';
    font-size: 24px;
    color: #293845;
    margin: 30px 20px;
    padding-bottom: 120px;
    padding-top: 70px;
    a {
        text-decoration: none;
    }
    button {
        margin-top: 50px;
    }
    h1 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #247A6B;
    }
`
const TextContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 30px;
    strong {
        font-weight: bold;
        margin-bottom: 10px;
    }
`