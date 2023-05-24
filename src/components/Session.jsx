import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Session({day, setFilmDay, setFilmTime}) {
    const {weekday, date, showtimes} = day;

    function selectDate(position){
        if (position === 0){
            setFilmTime(showtimes[0].name);
        } else {
            setFilmTime(showtimes[1].name);
        }
        setFilmDay(date);
    }

    return (
        <SessionContainer>
            {weekday} - {date}
            <ButtonsContainer>
                <button onClick={() => selectDate(0)}>
                    <Link to='/seats'>
                        {showtimes[0].name}
                    </Link>
                </button>
                <button onClick={() => selectDate(1)}>
                    <Link to='/seats'>
                        {showtimes[1].name}
                    </Link>
                </button>
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