import styled from "styled-components";

export default function Seat({seat}) {
    const {name, isAvailable} = seat;
    
    return(
        <SeatItem available={isAvailable} >{name}</SeatItem>
    );
}

const SeatItem = styled.div`
    cursor: pointer;
    border: 1px solid ${({available}) => !available ? '#F7C52B' : '#7B8B99'};
    background-color: ${({available}) => !available ? '#FBE192' : '#C3CFD9;'};
    height: 25px;
    width: 25px;
    border-radius: 25px;
    font-family: 'Roboto';
    font-size: 11px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 3px;
`