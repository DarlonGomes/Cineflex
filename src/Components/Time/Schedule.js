
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import axios from 'axios';
import Date from './Date';
import Footer from '../Footer';

export default function Schedule (){
    const [movieTime, setMovieTime] = useState(null);
    const {idFilme} = useParams();
    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`)
        promise.then(response => setMovieTime(response.data));
    }, [idFilme]);


    
    if (movieTime === null){
        return (
            <Page><h3> Carregando... </h3></Page>
            
        )
    }

    return (
        <Page>
            <h3>Selecione o horário</h3>
            <Lista>
                { movieTime.days.map(day => <Date key={day.id}{...day}/>) }
            </Lista>
            <Footer movieTime = {movieTime} idFilme={idFilme}/>
        </Page>
    )
}

const Page = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h3{
    font-family: 'Roboto';
    font-style: normal;
    font-size: 24px;
    color: #293845;
    margin: 40px;
    }
`;
const Lista = styled.div`
    width: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;