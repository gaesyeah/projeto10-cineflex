import styled from "styled-components";

export default function Seat({seat, tickets, setTickets}) {
    const {name, isAvailable} = seat;
    
    function selectSeat(){
        if (!isAvailable){
            alert('Esse assento não está disponível');
        } else{
            if (!tickets.includes(name)){
                setTickets([...tickets, name]);
            } else {
                const filteredTickets = tickets.filter(ticket => {
                    if (ticket === name){
                        return false;
                    } else {
                        return true;
                    }
                });
                setTickets([...filteredTickets]);
            }
        }
    }

    return(
        <SeatItem 
            available={isAvailable}
            name={name}
            tickets={tickets}
            onClick={selectSeat}
        >{name.padStart(2, '0')}
        </SeatItem>
    );
}

const SeatItem = styled.div`
    cursor: pointer;
    border: 1px solid ${({available, name, tickets}) => {
        if (!available) {
            return '#F7C52B';
        } else {
            if (!tickets.includes(name)){
                return '#7B8B99';
            } else {
                return '#0E7D71';
            }
        }}
    };
    background-color: ${({available, name, tickets}) => {
        if (!available) {
            return '#FBE192';
        } else {
            if (!tickets.includes(name)){
                return '#C3CFD9';
            } else {
                return '#1AAE9E';
            }
        }}
    };
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