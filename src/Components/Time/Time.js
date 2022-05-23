import {Link} from 'react-router-dom';
import styled from 'styled-components'
export default function Time ({id, name}){
    return (
        <Link style={{textDecoration: "none"}} to={`/assentos/${id}`}>
            <Option>
                <p>{name}</p>
            </Option>
        </Link>
    )
}

const Option = styled.div`
    width: 82px;
    height: 43px;
    background-color: #E8833A;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    & :hover{
        cursor: pointer;
        opacity: 0.6;
    }
    
    p{
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 18px;
        color: #FFFFFF;
    }
`