import styled from "styled-components";
import Loading from "../../style/Loading";
import loadingGif from "./../../assets/loading.gif";
import Seat from "../../components/Seat";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { cpf } from "cpf-cnpj-validator";
import axios from "axios";
import { useRef } from "react";

export default function SeatsPage({ seatInfos }) {
    const { buyedTickets, setBuyedTickets, buyerName, setBuyerName, buyerCPF, setBuyerCPF, seatList, setSeatList } = seatInfos;
    const navigate = useNavigate();

    const assentosParam = useParams().idSeat;
    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${assentosParam}/seats`)
        .then(sucess => setSeatList(sucess.data))
        .catch(error => alert(error.response.data))
    }, []);

    //-------------------------------------------------------------------
    const firstCPFchange = useRef(false);
    const firstNameChange = useRef(false);
    useEffect(() => {
        if (buyerCPF !== '' && firstCPFchange.current === false){
            firstCPFchange.current = true;
        }
        if (buyerName !== '' && firstNameChange.current === false){
            firstNameChange.current = true;
        }
    }, [buyerCPF, buyerName]);

    function validateCPF(){
        if (firstCPFchange.current && buyerCPF === '') {
            return <p>Este campo não pode estar vazio</p>;
        } else if (buyerCPF === ''){
            return;            
        } else if (!cpf.isValid(buyerCPF)) {
            return <p>Digite um CPF válido</p>;
        }
    }
    function validateName(){
        if (firstNameChange.current && buyerName === '') {
            return <p>Este campo não pode estar vazio</p>;
        }
    }
    //-------------------------------------------------------------------

    if (seatList === null){
        return (
            <Loading>
                <img src={loadingGif} alt='loading'/>
            </Loading>
        );
    } else {
        const { seats, movie, day, name } = seatList;

        return (
            <PageContainer>
                Selecione o(s) assento(s)
    
                <SeatsContainer>
                    {seats.map(seat =>
                        <Seat
                            seat={seat}
                            key={seat.id}
                            buyedTickets={buyedTickets}
                            setBuyedTickets={setBuyedTickets}
                        />
                    )}
                </SeatsContainer>
    
                <CaptionContainer>
                    <CaptionItem>
                        <CaptionCircle
                            background={'#1AAE9E'}
                            border={'#0E7D71'}
                        />Selecionado
                    </CaptionItem>
                    <CaptionItem>
                        <CaptionCircle
                            background={'#C3CFD9'}
                            border={'#7B8B99'}
                        />Disponível
                    </CaptionItem>
                    <CaptionItem>
                        <CaptionCircle
                            background={'#FBE192'}
                            border={'#F7C52B'}
                        />Indisponível
                    </CaptionItem>
                </CaptionContainer>
    
                <FormContainer>
                    Nome do Comprador:
                    <input
                        placeholder="Digite seu nome..."
                        value={buyerName}
                        onChange={(e) => setBuyerName(e.target.value)}
                    />
                    {validateName()}
                    CPF do Comprador:
                    <input
                        placeholder="Digite seu CPF..."
                        value={cpf.format(buyerCPF)}
                        onChange={(e) => setBuyerCPF(e.target.value)}
                    />
                    {validateCPF()}
                    <button  
                        disabled={(!buyerName || !cpf.isValid(buyerCPF) || buyedTickets.length === 0) ? true : false}
                        onClick={() => navigate('/sucesso')}
                    >Reservar Assento
                    </button>
                </FormContainer>
    
                <FooterContainer>
                    <div>
                        <img src={movie.posterURL} alt="poster" />
                    </div>
                    <div>
                        <p>{movie.title}</p>
                        <p>{day.weekday} - {name}</p>
                    </div>
                </FooterContainer>
    
            </PageContainer>
        );
    }
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto';
    font-size: 24px;
    text-align: center;
    color: #293845;
    margin-top: 30px;
    padding-bottom: 120px;
    padding-top: 70px;
`
const SeatsContainer = styled.div`
    width: 330px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`
const FormContainer = styled.div`
    width: calc(100vw - 40px); 
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 20px 0;
    font-size: 18px;
    button {
        align-self: center;
    }
    input {
        width: calc(100vw - 60px);
    }
    p {
        margin-top: -23px;
        margin-left: 3px;
        margin-bottom: 6px;
        font-size: 17px;
        color: red;
    }
`
const CaptionContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 300px;
    justify-content: space-between;
    margin: 20px;
`
const CaptionCircle = styled.div`
    border: 1px solid ${({ border }) => border};
    background-color: ${({ background }) => background};   
    height: 25px;
    width: 25px;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 3px;
`
const CaptionItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 12px;
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
            text-align: left;
            &:nth-child(2) {
                margin-top: 10px;
            }
        }
    }
`