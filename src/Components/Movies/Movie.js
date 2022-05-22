import React from 'react';
import {Link} from 'react-router-dom';
import styled from "styled-components";
export default function Movie ({id, posterURL, title}){
    return (
        <Link to={`/sessoes/${id}`}>
        <SelectedMovie>
            <img src={posterURL} alt={title} />
        </SelectedMovie>    
        </Link>
    )
}

const SelectedMovie = styled.div`
        width: 145px;
        height: 209px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #FFFFFF;
        box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
        border-radius: 3px;
        margin-bottom: 15px;
    
    img{
        width: 129px;
        height: 193px;
    }
`