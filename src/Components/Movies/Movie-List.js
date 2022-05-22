import React from 'react';
import {useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios';
import Movie from './Movie';

export default function Movies (){
    const [movie, setMovie] = useState([]);
    
    useEffect(() => {
    const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
        promise.then(response => {
            setMovie(response.data)
        }) 
    }, []);

    return (
        <>
        <Info>
        <h3> Seleciona o filme</h3>
        </Info>
        <Poster>
            {movie.map(movie => (<Movie key={movie.id} {...movie}/>))}
        </Poster>
        </>
    )
}

const Info = styled.div`
    width: 100%;
    display:flex;
    justify-content: center;
    align-items: center;

h3{
    font-family: 'Roboto';
    font-size: 24px;
    font-weigth: 400;
    color: #293845;
    margin: 40px
}
`
const Poster = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
`