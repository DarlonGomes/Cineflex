
import styled from 'styled-components';
import {useState} from 'react';
export default function Buyer ({ addBuyer}) {
    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
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
                type="text"
                placeholder='Digite seu CPF...'
                onChange={(e)=> setCpf(e.target.value)}
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
        margin-bottom: 5px;
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
    }
`