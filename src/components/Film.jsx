import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Film({film, filmNameRef}) {
    const {id ,title, posterURL} = film;
    const navigate = useNavigate();

    function selectFilm(){
        filmNameRef.current = title;
        
        navigate(`/sessoes/${id}`);
    }

    const [showName, setShowName] = useState(false)

    return (
        <MovieContainer
            onMouseEnter={() => setShowName(true)}
            onMouseLeave={() => setShowName(false)}
            onClick={selectFilm}
        >
            <img
                src={posterURL} 
                alt="poster"
            />
            {showName && <div><p>{title}</p></div>}
        </MovieContainer>
    );
}

const MovieContainer = styled.div`
    position: relative;
    width: 145px;
    height: 210px;
    box-shadow: 0px 2px 4px 2px #0000001A;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    cursor: pointer;
    img {
        width: 130px;
        height: 190px;
        position: absolute;
    }
    div{
        position: absolute;
        background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 65.1%, #000000 100%);
        border-radius: 0px 0px 4px 4px;
        height: 130px;
        width: 145px;
        bottom: 0;
        display: flex;
        align-items: end;
        justify-content: center;
    }
    p{  
        font-size: 20px;
        word-break: break-word;
        color: white;
        margin-bottom: 7px;
    }
`