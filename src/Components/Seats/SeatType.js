import styled from 'styled-components'
export default function SeatType (){
    return(
        <Page>
            <Info>
                <div className='selected'>
                </div>
                <p>Selecionado</p>
            </Info>
            <Info>
                <div className='true'>
                </div>
                <p>Disponível</p>
            </Info>
            <Info>
                <div className='false'>
                </div>
                <p>Indisponível</p>
            </Info>
        </Page>
    )
}

const Page = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 16px 0px 40px;
`;

const Info = styled.div `
    height: 45px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 16px 20px;

    .true{
        width: 24px;
        height: 24px;
        background: #C3CFD9;
        border: 1px solid #7B8B99;
        border-radius: 17px;
    }

    .false{
        width: 24px;
        height: 24px;
        background: #FBE192;
        border: 1px solid #F7C52B;
        border-radius: 17px;
    }

    .selected{
        width: 25px;
        height: 25px;
        background: #8DD7CF;
        border: 1px solid #1AAE9E;
        border-radius: 17px;
    }

    p{
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 13px;
        color: #4E5A65;
    }
`;