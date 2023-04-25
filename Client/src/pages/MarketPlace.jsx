import React, { useEffect, useState } from "react";
import Card from "../components/Cards/CardLP";
import "./marketplace.css";
import axios from 'axios'

const MarketPlace =  () => {

  const [CD, setCD] = useState();
  const [filterPopUp, setFilterPopup] = useState(true)

  useEffect(() => {
    const getFlights = ()=>{
      let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://127.0.0.1:3000/getAirplanes',
      headers: { }
      };

      axios.request(config)
      .then((response) => {
      console.log(response.data);
      setCD(response.data)
      })
      .catch((error) => {
      console.log(error);
      });
    }
    getFlights();
  }, []);

  const handleClick = ()=>{
    setFilterPopup(false);

  }

return (
   <div >      
      {CD?.map((flights,index)=>(
        <div key={index} className="marketplace_container">
        <Card 
        FlightDate={flights["FlightDate"]} 
        From={flights["From"]} 
        FromTime= {flights["FromTime"]}
        To = {flights["To"]}
        ToTime = {flights["ToTime"]}
        Price = {flights["Price"]}
        id = {flights["_id"]}
        />
        </div>
      ))}
      </div>
    
  );}

export default MarketPlace;
