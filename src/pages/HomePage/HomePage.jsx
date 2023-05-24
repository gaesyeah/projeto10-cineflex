import Film from "../../components/Film.jsx"
import styled from "styled-components"
import Loading from "../../style/Loading.jsx";
import loadingGif from "../../../public/loading.gif"
import { useEffect, useState } from "react";
import axios from "axios";

export default function HomePage({setFilmName}) {

    const [filmList, setFilmList] = useState([]);

    useEffect(() => {
        axios.get('https://mock-api.driven.com.br/api/v8/cineflex/movies')
        .then((sucess) => setFilmList(sucess.data))
        .catch((error) => alert(error.response.data))
    }, [])

    if (filmList.length === 0){
        return (
            <Loading>
                <img src={loadingGif}/>
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
                            setFilmName={setFilmName}
                        />
                    )}
                </ListContainer>
    
            </PageContainer>
        )
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
    width: 330px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    padding: 10px;
`