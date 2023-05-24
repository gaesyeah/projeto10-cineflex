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
                <Link to='/seats'>
                    <button onClick={() => selectDate(0)}>
                        {showtimes[0].name}
                    </button>
                </Link>
                <Link to='/seats'>
                    <button onClick={() => selectDate(1)}>
                        {showtimes[1].name}
                    </button>
                </Link>
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