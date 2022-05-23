import styled from "styled-components"
import { useNavigate, useLocation} from "react-router-dom";
export default function Success ({setChoosenSeats, setSeatId}){
    const navigate = useNavigate();
    const location = useLocation();
    const data = location.state;
   
    console.log(data)
    return(
        <Page>
            <h3>Pedido feito <br/>
                com sucesso!</h3>
            <div className="org">
                <h4>Filme e sessão</h4>
                <p></p>
            </div>
            <div className="org">
                <h4>Ingressos</h4>
                {data.assentos.map((item)=> <p>Assento {item}</p>)}
            </div>
            <div className="org">
                <h4>Comprador</h4>
                <p>Nome: {data.name}</p>
                <p>CPF: {data.cpf}</p>
            </div>
            <button onClick={()=> {
                setChoosenSeats([]);
                setSeatId([]);
                navigate("/")
            } }>Voltar pra Home</button>
        </Page>
    )
    
}

const Page = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .org{
        width: 325px;
    }
    h3{
        font-family: 'Roboto';
        font-weight: 700;
        font-size: 24px;    
        color: #247A6B;
        margin: 40px;
        text-align: center;
    }

    h4{
        font-family: 'Roboto';
        font-weight: 700;
        font-size: 24px;
        color: #293845;
        margin-top: 20px;
        margin-bottom: 10px;
    }

    p{
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 22px;
        color: #293845;
        margin-bottom: 10px;
    }

    button{
        width: 225px;
        height: 42px;
        background: #E8833A;
        border-radius: 3px;
        border: none;
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 18px;
        color: #FFFFFF;
        margin-top: 40px;

    }
`;