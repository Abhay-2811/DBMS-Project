import React,{useState} from "react";
import "./cardLP.css";
import {useNavigate, createSearchParams} from 'react-router-dom' 

const CardLP = (props) =>{
  const [_id, setID]  =useState(props.id);
  const navigate = useNavigate();
  return (
    <div className="cards">
        
        <h1 className="title">{props.FlightDate}</h1>
        <p><b>{props.From}</b> <br />{props.FromTime}</p>
        <span className="arrow">&#8594;</span>
        <p> <b>{props.To} </b><br />{props.ToTime}</p>
        <div className="group">
          <label>Price : $</label>
          <h1>{props.Price}</h1>
        </div>
      <div className="rightSection">
        <button onClick={()=>{
          navigate({
            pathname: '/book',
            search: createSearchParams({
              id: _id
            }).toString()
          })
          }}>Book now</button>
      </div>
    </div>
  );}
;

export default CardLP;