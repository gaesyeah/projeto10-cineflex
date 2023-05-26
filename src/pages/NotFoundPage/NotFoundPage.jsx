import styled from "styled-components";
import error from './../../assets/404.png'
import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {

    const navigate = useNavigate();

    return (
        <NotFound>
            <img src={error}/>
            <button onClick={() => navigate('/')}>Voltar Home</button>
        </NotFound>
    );
}

const NotFound = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    img{
        width: 330px;
    }
    button{
        position: absolute;
        margin-top: 350px;
    }
`