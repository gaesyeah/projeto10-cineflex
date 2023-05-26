import styled from "styled-components";

export default function Seat({ seat, buyedTickets, setBuyedTickets }) {
    const { id, name, isAvailable } = seat;

    function selectSeat() {
        if (!isAvailable) {
            alert('Esse assento não está disponível');
        } else {
            if (!buyedTickets.includes(id)) {
                setBuyedTickets([...buyedTickets, id]);
            } else {
                const removeLastTicket = buyedTickets.filter(ticketId => {
                    if (ticketId === id) {
                        return false;
                    } else {
                        return true;
                    }
                });
                setBuyedTickets([...removeLastTicket]);
            }
        }
    }

    return (
        <SeatItem 
            id={id}
            available={isAvailable}
            buyedTickets={buyedTickets}
            onClick={selectSeat}
            data-test="seat"
        >{name.padStart(2, '0')}
        </SeatItem>
    );
}

const SeatItem = styled.div`
    cursor: pointer;
    height: 25px;
    width: 25px;
    font-family: 'Roboto';
    font-size: 11px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 3px;
    border-radius: 25px;
    border: 1px solid ${({id, available, buyedTickets}) => (
        (!available) ? '#F7C52B' : ((!buyedTickets.includes(id)) ? '#7B8B99' : '#0E7D71')
    )};
    background-color: ${({id, available, buyedTickets}) => (
        (!available) ? '#FBE192' : ((!buyedTickets.includes(id)) ? '#C3CFD9': '#1AAE9E')
    )};
    &:hover{
        transition-duration: 200ms;
        color: ${({available}) => ((available) && 'white')};
    }
`