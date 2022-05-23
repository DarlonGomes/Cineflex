import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

export default function Footer ({movieTime, idFilme}) {
    const location = useLocation();

    if(location.pathname === `/sessoes/${idFilme}`){
        return (
        <Page>
            <div className='container'>
                <img src={movieTime.posterURL} alt={movieTime.title} />
            </div>
            <div className='info'>
                <p>{movieTime.title}</p>
            </div>
        </Page>
    ) 
    }
    
}

const Page = styled.div`
    width: 100%;
    height: 117px;
    position: fixed;
    right: 0px;
    bottom: 0px;
    background-color: #DFE6ED;
    border: solid 1px #9EADBA;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 10px;

    .container{
        width: 64px;
        height: 89px;
        background: #FFFFFF;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        border-radius: 2px; 
        display: flex;
        justify-content: center;
        align-items: center;
    }

    img{
        width: 48px;
        height: 72px;
    }

    .info{
        min-width: 150px;
        height: 117px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 15px;
    }

    p{
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 17px;
        color: #293845;
    }
`