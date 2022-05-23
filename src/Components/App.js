import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {useState} from 'react';
import "./style/reset.css";
import Banner from "./Banner";
import Movies from "./Movies/Movie-List";
import Success from "./OrderComplete/SuccessfulPurchase";
import Seats from "./Seats/Seats";
import Schedule from "./Time/Schedule";


export default function App (){
    const [movie, setMovie] = useState({});
    const [choosenSeats, setChoosenSeats] = useState ([]);
    const [seatId, setSeatId] = useState([]);
    function seatSelection (id, name) {
        if(choosenSeats.includes(name)){
            setChoosenSeats(choosenSeats.filter((elemento) => elemento !== name))
            return;
        }
        setChoosenSeats([...choosenSeats, name]);
        setSeatId([...seatId, id]);
    }

    return(
        <BrowserRouter>
        <Banner/>
        <Routes>
        <Route path="/" element={<Movies/>} />
        <Route path ="/sessoes/:idFilme" element = {<Schedule setMovie={setMovie} movie={movie}/>} />
        <Route path ="/assentos/:idSessao" element = {<Seats  seatSelection={seatSelection} choosenSeats={choosenSeats} seatId={seatId}/>} />
        <Route path="/sucesso" element = {<Success setChoosenSeats={setChoosenSeats} setSeatId={setSeatId}/> }/>  
        </Routes>
        </BrowserRouter>
    )
}