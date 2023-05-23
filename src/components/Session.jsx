import styled from "styled-components";

export default function Session({day}) {
    const {weekday, date, showtimes} = day;

    return (
        <SessionContainer>
            {weekday} - {date}
            <ButtonsContainer>
                <button>{showtimes[0].name}</button>
                <button>{showtimes[1].name}</button>
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