import styled from "styled-components";

export default function Seat({ seat, tickets, setTickets }) {
    const { name, isAvailable } = seat;

    function selectSeat() {
        if (!isAvailable) {
            alert('Esse assento não está disponível');
        } else {
            if (!tickets.includes(name)) {
                setTickets([...tickets, name]);
            } else {
                const filteredTickets = tickets.filter(ticket => {
                    if (ticket === name) {
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
    height: 25px;
    width: 25px;
    font-family: 'Roboto';
    font-size: 11px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 3px;
    border-radius: 25px;
    border: 1px solid ${({ available, name, tickets }) => (
        (!available) ? '#F7C52B' : ((!tickets.includes(name)) ? '#7B8B99' : '#0E7D71')
    )};
    background-color: ${({ available, name, tickets }) => (
        (!available) ? '#FBE192' : ((!tickets.includes(name)) ? '#C3CFD9': '#1AAE9E')
    )};
`