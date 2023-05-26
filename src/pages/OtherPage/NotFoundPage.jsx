import error from './../../assets/404.png'
import OtherPage from './Style';
import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {

    const navigate = useNavigate();

    return (
        <OtherPage>
            <img src={error}/>
            <button onClick={() => navigate('/')}>Voltar Home</button>
        </OtherPage>
    );
}