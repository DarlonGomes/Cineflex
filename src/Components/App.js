import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from 'react';
import Banner from "./Banner";
import Movie from "./Movies/Movie";
import Movies from "./Movies/Movie-List";
import Success from "./OrderComplete/SuccessfulPurchase";
import Seats from "./Seats/Seats";


export default function App (){
    
    return(
        <BrowserRouter>
        <Banner/>
        <Routes>
        <Route path="/" element={<Movies/>} />
        <Route path ="/sessoes/:idFilme" element = {<Movie />} />
        <Route path ="/assentos/:idSessao" element = {<Seats   />} />
        <Route path="/sucesso" element = {<Success /> }/>  
        </Routes>
        </BrowserRouter>
    )
}