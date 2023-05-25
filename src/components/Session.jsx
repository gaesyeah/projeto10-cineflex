import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Session({day, filmDayRef, filmTimeRef}) {
    const {weekday, date, showtimes} = day;
    const navigate = useNavigate();

    function selectDate(showTime){
        filmDayRef.current = date;
        filmTimeRef.current = showTime.name;

        navigate(`/assentos/${showTime.id}`);
    }

    return (
        <SessionContainer data-test="movie-day">
            {weekday} - {date}
            <ButtonsContainer>
                {showtimes.map(showTime => 
                    <button
                        onClick={() => selectDate(showTime)}
                        key={showTime.id}
                        data-test="showtime"
                    >{showTime.name}
                    </button>
                )}
            </ButtonsContainer>
        </SessionContainer>
    );
}

const SessionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-family: 'Roboto';
    font-size: 20px;
    color: #293845;
    padding: 0 20px;
`
const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 20px 0;
    button {
        margin-right: 20px;
    }
    a {
        text-decoration: none;
    }
`