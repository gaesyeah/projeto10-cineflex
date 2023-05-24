import styled from "styled-components";

export default function Seat({ seat, tickets, setTickets }) {
    const { id, name, isAvailable } = seat;

    function selectSeat() {
        if (!isAvailable) {
            alert('Esse assento não está disponível');
        } else {
            if (!tickets.includes(id)) {
                setTickets([...tickets, id]);
            } else {
                const filteredTickets = tickets.filter(ticketId => {
                    if (ticketId === id) {
                        return false;
                    } else {
                        return true;
                    }
                });
                setTickets([...filteredTickets]);
            }
        }
    }

    return (
        <SeatItem
            id={id}
            available={isAvailable}
            tickets={tickets}
            onClick={selectSeat}
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
    border: 1px solid ${({id, available, tickets}) => (
        (!available) ? '#F7C52B' : ((!tickets.includes(id)) ? '#7B8B99' : '#0E7D71')
    )};
    background-color: ${({id, available, tickets}) => (
        (!available) ? '#FBE192' : ((!tickets.includes(id)) ? '#C3CFD9': '#1AAE9E')
    )};
`