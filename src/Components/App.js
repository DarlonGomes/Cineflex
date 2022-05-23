import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import "./style/reset.css"
import Banner from "./Banner";
import Movies from "./Movies/Movie-List";
import Success from "./OrderComplete/SuccessfulPurchase";
import Seats from "./Seats/Seats";
import Schedule from "./Time/Schedule";


export default function App (){

    const [ticket, setTicket] = useState([])
    function addBuyer(event, name, cpf) {
        event.preventDefault();
        const newTicket = [...ticket, {buyer:name , info:cpf}];
    }
    return(
        <BrowserRouter>
        <Banner/>
        <Routes>
        <Route path="/" element={<Movies/>} />
        <Route path ="/sessoes/:idFilme" element = {<Schedule />} />
        <Route path ="/assentos/:idSessao" element = {<Seats addBuyer={addBuyer}/>} />
        <Route path="/sucesso" element = {<Success /> }/>  
        </Routes>
        </BrowserRouter>
    )
}