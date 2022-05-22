import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style/reset.css"
import React from 'react';
import Banner from "./Banner";
import Movies from "./Movies/Movie-List";
import Success from "./OrderComplete/SuccessfulPurchase";
import Seats from "./Seats/Seats";
import Schedule from "./Time/Schedule";


export default function App (){
    
    return(
        <BrowserRouter>
        <Banner/>
        <Routes>
        <Route path="/" element={<Movies/>} />
        <Route path ="/sessoes/:idFilme" element = {<Schedule />} />
        <Route path ="/assentos/:idSessao" element = {<Seats   />} />
        <Route path="/sucesso" element = {<Success /> }/>  
        </Routes>
        </BrowserRouter>
    )
}