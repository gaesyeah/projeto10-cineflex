import { useLocation, useNavigate } from "react-router-dom";
import OtherPage from "./Style";

export default function ErrorPage() {

    const {message, status, statusText} = useLocation().state;

    const navigate = useNavigate();

    return (
        <OtherPage>
            <div>
                <h1>{status}</h1>
                <p>{statusText}</p>
                <p>{message}</p>
            </div>
            <button onClick={() => navigate('/')}>Voltar para a Home</button>
        </OtherPage>
    );
}

