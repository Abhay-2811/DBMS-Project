import React, { useState, useEffect } from 'react';
import DashboardHeader from '../../components/DashboardHeader';

import './styles.css';
import axios from 'axios'
function Flights() {
  const [flights, setflights] = useState();
  const [showPopup, setShowPopup] = useState(false);


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
      setflights(response.data)
      })
      .catch((error) => {
      console.log(error);
      });

    }
    getFlights();
  }, []);



  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newflight = Object.fromEntries(formData.entries());
    console.log(newflight);
    let data = JSON.stringify({
      "FlightDate": newflight.Date,
      "From": newflight.From,
      "FromTime": newflight.FTime,
      "To": newflight.To,
      "ToTime": newflight.TTime,
      "PilotID": newflight.pilot_id,
      "Price":Number(newflight.Cost)
    });
    
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://127.0.0.1:3000/addFlight',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
    
    // closePopup();
  };
  

  const closePopup = () => {
    setShowPopup(false);
  };


  return (
    <div className='dashboard-content'>
      <DashboardHeader
        btnText='New Flight'
        onClick={() => setShowPopup(true)}
      />
      {showPopup && 
        <div className='popup'>
          <form id='new-flight-form' onSubmit={handleSubmit}>
          <label>
              Flight Date:
              <input type='Date' name='Date' />
            </label>
            <label>
              Cost (in $):
              <input type='number' name='Cost' />
            </label>
            <label>
              From:
              <input type='text' name='From' />
            </label>
            <label>
              From-Time:
              <input type='time' name='FTime' />
            </label>
            <label>
              To:
              <input type='text' name='To' />
            </label>
            <label>
              To-Time:
              <input type='time' name='TTime' />
            </label>
            <label>
              Pilotid:
              <input type='text' name='pilot_id' />
            </label>
            <button type='submit'>
              Submit
            </button>
            <button type='button' onClick={closePopup}>
              Cancel
            </button>
          </form>
        </div>
      }
        
      {!showPopup && <div className='dashboard-content-container'>
        <div className='dashboard-content-header'>
          <h2>Flights List</h2>
        </div>

        <table className='pilots-table'>
          <thead>
            <tr>
              <th>No</th>
              <th>From</th>
              <th>To</th>
              <th>Cost</th>
              <th>Pilot Name</th>
              <th>No. of Bookings</th>
            </tr>
          </thead>
          {(
            <tbody>
              {flights?.map((flight, index) => (
                <tr key={index}>
                  <td><span>{index+1}</span></td>
                  <td>
                    <div>
                      <span>{`${flight['From']}`}</span>
                    </div>
                  </td>
                  <td><span>{flight['To']}</span></td>
                  <td><span>{`$${flight['Price']}`}</span></td>
                  <td><span>{flight['PilotID']['PilotName']}</span></td>
                  <td><span>{flight['Bookings'].length}</span></td>
                </tr>
              ))}
            </tbody>
          ) }
        </table>

        
  </div>}
</div>
);
}

export default Flights;





