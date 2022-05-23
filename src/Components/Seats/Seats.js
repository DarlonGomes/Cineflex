import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components'
import SeatType from './SeatType';
import Seat from './Seat';
import Buyer from './Buyer';
export default function Seats ({addBuyer}) {
    const [seats, setSeats] = useState(null);
    const {idSessao} = useParams();

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`)
        promise.then(response => setSeats(response.data.seats))
    }, [idSessao])

    if (seats === null){
        return (
            <Page>
                <h3>Carregando...</h3>
            </Page>
        )
    }
    return (
        <Page>
            <h3> Selecione o(s) assento(s)</h3>
            <SeatGrid>
                { seats.map(seat => <Seat key={seat.id} {...seat} />)}
            </SeatGrid>
            <SeatType />
            <Buyer addBuyer={addBuyer}/>
        </Page>
    )
}
const Page = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h3{
    font-family: 'Roboto';
    font-style: normal;
    font-size: 24px;
    color: #293845;
    margin: 40px;
    }
`;

const SeatGrid = styled.div`
    width: 327px;
    height: 203px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

