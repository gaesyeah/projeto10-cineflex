import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import loadingGif from "../../assets/loading.gif";
import Film from "../../components/Film.jsx";
import Loading from "../../style/Loading.jsx";

export default function HomePage({filmNameRef}) {

    const navigate = useNavigate();

    const [filmList, setFilmList] = useState(null);

    useEffect(() => {
        axios.get('https://mock-api.driven.com.br/api/v8/cineflex/movies')
        .then((sucess) => setFilmList(sucess.data))
        .catch((error) => {
            const {message} = error.response.data;
            const {status, statusText} = error.response;
            navigate('/requestError', {state: {message, status, statusText}})
        })
    }, []);

    if (filmList === null){
        return (
            <Loading>
                <img src={loadingGif} alt='loading'/>
            </Loading>
        );
    } else {
        return (
            <PageContainer>
                Selecione o filme
    
                <ListContainer>
                    {filmList.map(film => 
                        <Film 
                            film={film} 
                            key={film.id} 
                            filmNameRef={filmNameRef}
                        />
                    )}
                </ListContainer>

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
    padding-top: 70px;
`
const ListContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 20px;
    max-width: 865px;
    min-width: 340px;
    gap: 10px;
`