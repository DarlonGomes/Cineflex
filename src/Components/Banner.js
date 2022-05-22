import React from 'react'
import styled from 'styled-components';

export default function Banner(){
    return(
        <>
        <Header>
            <h1>CINEFLEX</h1>
        </Header>
        </>
    )
}

const Header = styled.div`
    width: 100%;
    height: 67px;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1578849278619-e73505e9610f?
    crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MH
    xwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435");
    display: flex;
    justify-content: center;
    align-items: center;

    h1{
        font-family: 'Roboto';
        font-size: 34px;
        font-weigth: 700;
        color: #E29A4A;
        letter-spacing: 5px;
        text-shadow: 10px 4px 5px rgba(0, 0, 0, 0.3);
    }
`;

