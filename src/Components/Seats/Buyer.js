
import styled from 'styled-components';
import {useState} from 'react';
import {useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function Buyer ({ seatId, choosenSeats }) {
    
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');

    const data = {
        ids: seatId,
        name: name,
        cpf :cpf
    }

    const printData = {
        assentos: choosenSeats,
        name: name,
        cpf :cpf
    }

    function addBuyer(event, name, cpf) {
        event.preventDefault();
        const promise = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", data)
        promise.then(response => navigate("/sucesso", {state: printData}));
    }
    return (
        <Page>


            <form onSubmit={(event) => addBuyer(event, name, cpf)}>
                <div className="org">
                    <h4>Nome do comprador:</h4>
                <input
                type = "text"
                placeholder="Digite seu nome..."
                onChange={(e) => setName(e.target.value)}
                value = {name}
                required
                ></input>
                </div>
                
                <div className='org'>
                    <h4>CPF do comprador:</h4>
                <input
                type="tel"
                id="cpf"
                placeholder='Digite seu CPF...'
                onChange={(e)=> setCpf(e.target.value
                    .replace(/\D/g, "")
                    .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
                    .substring(0, 14))}
                value = {cpf}
                required
                ></input>
                </div>
                
                <button type="submit">Reservar assento(s)</button>
            </form>
        </Page>
    )
}

const Page = styled.div`

    form{
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    .org{
        width: 327px;
    }
    h4{
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 18px;
        color: #293845;
        margin-bottom: 5px;
        position: relative;

    }

    input{
        width: 327px;
        height: 51px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 3px;
        margin-bottom: 5px;

        font-family: 'Roboto';
        font-size: 18px;
        font-weight: 400;
        color: #293845;
        margin-bottom: 10px;
    }

    button {
        width: 225px;
        height: 42px;
        background: #E8833A;
        border: none;
        border-radius: 3px;
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 18px;
        color: #FFFFFF;
        margin-top: 30px;
    }
`