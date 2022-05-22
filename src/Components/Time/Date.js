import styled from 'styled-components';
import Time from "./Time";
export default function Date ({weekday, date, showtimes}) {
return (
    <Day>
        <Title>
            {weekday} - {date}
        </Title>
        <Options>
            {showtimes.map(showtime => (
                <Time key={showtime.id} {...showtime} />
            ))}
        </Options>
    </Day>
)
}

const Day = styled.div`
    width: 90%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin-bottom: 23px;
`

const Title = styled.div`

    font-family: 'Roboto';
    font-weight: 400;
    font-size: 20px;
    color: #293845;
`

const Options = styled.div `
    width: 90%;
    height: 45px;
    display: flex;
    margin: 0px 10px 0px 0px;
`