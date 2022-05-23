import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {useState} from 'react';
import "./style/reset.css";
import Banner from "./Banner";
import Movies from "./Movies/Movie-List";
import Success from "./OrderComplete/SuccessfulPurchase";
import Seats from "./Seats/Seats";
import Schedule from "./Time/Schedule";


export default function App (){
    const [ticket, setTicket] = useState([])
    const [choosenSeats, setChoosenSeats] = useState ([])
    function seatSelection (name) {
        if(choosenSeats.includes(name)){
            setChoosenSeats(choosenSeats.filter((elemento) => elemento !== name))
            return;
        }
        setChoosenSeats([...choosenSeats, name])
    }

    

    return(
        <BrowserRouter>
        <Banner/>
        <Routes>
        <Route path="/" element={<Movies/>} />
        <Route path ="/sessoes/:idFilme" element = {<Schedule />} />
        <Route path ="/assentos/:idSessao" element = {<Seats  seatSelection={seatSelection} choosenSeats={choosenSeats} ticket ={ticket}/>} />
        <Route path="/sucesso" element = {<Success ticket={ticket} choosenSeats={choosenSeats}/> }/>  
        </Routes>
        </BrowserRouter>
    )
}