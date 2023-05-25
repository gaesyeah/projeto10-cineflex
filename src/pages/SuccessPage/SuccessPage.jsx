import styled from "styled-components";
import sucessLoading from "./../../assets/sucessLoading.gif";
import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { cpf } from "cpf-cnpj-validator";
import axios from "axios";

export default function SuccessPage({sucessInfos}) {
    const {filmNameRef, filmDayRef, filmTimeRef, buyedTickets, setBuyedTickets, buyerName, setBuyerName, buyerCPF, setBuyerCPF, seatList,} = sucessInfos;
    const userReserve = {
        ids: buyedTickets,
        name: buyerName,
        cpf: buyerCPF
    }
    const navigate = useNavigate();

    //fiz isso para zerar os valores que estão vindo do componente pai assim que a requisição post é retornada
    //não precisa ser variavel de estado porque esses valores estão definidos antes mesmo dessa pagina ser carregada
    const sucessFilmName = useRef(filmNameRef.current);
    const sucessFilmDay = useRef(filmDayRef.current);
    const sucessFilmTime = useRef(filmTimeRef.current);
    const sucessBuyedTickets = useRef([...buyedTickets]);
    const sucessBuyerName = useRef(buyerName);
    const sucessBuyerCPF = useRef(buyerCPF);

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.post('https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many', userReserve)
        .then(() => {
            filmNameRef.current = undefined;
            filmDayRef.current = undefined;
            filmTimeRef.current = undefined;
            setBuyedTickets([]);
            setBuyerName('');
            setBuyerCPF('');

            setLoading(false);
        })
        .catch(error => alert(error.response.data))
    }, []);

    return (
        <PageContainer sucessFilmName={sucessFilmName}>
            {loading &&
                <SucessLoading>
                    <img src={sucessLoading} alt='sucessLoading'/>
                </SucessLoading>
            }
            {!sucessFilmName.current
                ?
                <h1>Por favor, volte à página inicial <br /> para fazer um novo pedido!</h1>
                :
                <h1>Pedido feito <br /> com sucesso!</h1>
            }
            <TextContainer data-test="movie-info">
                <strong><p>Filme e sessão</p></strong>
                <p>{sucessFilmName.current}</p>
                <p>{sucessFilmDay.current} {sucessFilmTime.current}</p>
            </TextContainer>

            <TextContainer data-test="seats-info">
                <strong><p>Ingressos</p></strong>
                {seatList.seats.map(seat => {
                    if (sucessBuyedTickets.current.includes(seat.id)){
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
                <p>Nome: {sucessBuyerName.current}</p>
                <p>CPF: {cpf.format(sucessBuyerCPF.current)}</p>
            </TextContainer>

                <button 
                    disabled={loading} 
                    onClick={() => navigate('/')} 
                    data-test="go-home-btn"
                >Voltar para Home
                </button>
        </PageContainer>
    );
}

const SucessLoading = styled.div`
    margin-top: -100px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: absolute;
    img{
        width: 115px;
    }
`
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
        color: ${({sucessFilmName}) => (!sucessFilmName.current) ? '#cf4651' : '#247A6B'};
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