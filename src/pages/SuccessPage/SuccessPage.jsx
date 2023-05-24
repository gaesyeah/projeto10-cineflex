import styled from "styled-components";
import sucessLoading from "./../../assets/sucessLoading.gif";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function SuccessPage({sucessInfos}) {
    const {filmNameRef, filmDayRef, filmTimeRef, tickets, setTickets, buyerName, setBuyerName, buyerCPF, setBuyerCPF} = sucessInfos;
    const navigate = useNavigate();

    const [hide, setHide] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setHide(false);
        }, 500);
    }, []);

    function resetOrder(){
        setTickets([]);
        setBuyerName('');
        setBuyerCPF('');
        
        navigate('/');
    }

    return (
        <PageContainer>
            {hide &&
                <SucessLoading>
                    <img src={sucessLoading}/>
                </SucessLoading>
            }
            <h1>Pedido feito <br /> com sucesso!</h1>

            <TextContainer>
                <strong><p>Filme e sessão</p></strong>
                <p>{filmNameRef.current}</p>
                <p>{filmDayRef.current} {filmTimeRef.current}</p>
            </TextContainer>

            <TextContainer>
                <strong><p>Ingressos</p></strong>
                {tickets.map(id => 
                    <p key={id}>
                        Assento {id.toString().slice(3)}
                    </p>
                )}
            </TextContainer>

            <TextContainer>
                <strong><p>Comprador</p></strong>
                <p>Nome: {buyerName}</p>
                <p>CPF: {buyerCPF}</p>
            </TextContainer>

                <button onClick={resetOrder}>
                    Voltar para Home
                </button>
        </PageContainer>
    );
}

const SucessLoading = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -20%;
    width: 100%;
    height: 100%;
    position: absolute;
    img{
        width: 130px;
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