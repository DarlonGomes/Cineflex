import styled from 'styled-components'
import React from 'react'
export default function Seat ({name, isAvailable}){
    if(isAvailable === true){
        return (
            <Avaiable onClick="">
                <p>{name}</p>
            </Avaiable>
        )
    }
    

    return(
        <Unavaiable>
                <p>{name}</p>
            </Unavaiable>
    )
}

const Avaiable = styled.div`
    width: 24px;
    height: 24px;
    background: #C3CFD9;
    border: 1px solid #7B8B99;
    border-radius: 17px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 9px 2px;

    p{
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 11px;
        color: #000000;
    }
`;

const Unavaiable = styled.div`
    width: 24px;
    height: 24px;
    background: #FBE192;
    border: 1px solid #F7C52B;
    border-radius: 17px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 9px 2px;

    p{
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 11px;
        color: #000000;
    }
`;