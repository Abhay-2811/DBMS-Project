import React, { useState, useEffect } from 'react';
import DashboardHeader from '../../components/DashboardHeader';
import './styles.css';
import axios from 'axios';

function Pilots() {

  const [pilots, setPilots] = useState();
  const [showPopup, setShowPopup] = useState(false);

  

  useEffect(() => {
    const getPilot = ()=>{
      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'http://127.0.0.1:3000/getPilots',
        headers: { }
      };
      
      axios.request(config).then((response) => {
        console.log(response.data);
        setPilots(response.data);
      })
      .catch((error) => {
        console.log(error);
      });      
    };
    getPilot();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newPilot = Object.fromEntries(formData.entries());
    let data = JSON.stringify({
      "PilotName": newPilot.Name,
      "LicenseID": newPilot.LID,
      "Experience": Number(newPilot.Exp),
      "Email": newPilot.Email
    });
    
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://127.0.0.1:3000/addPilot',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios.request(config).then((response) => {
      console.log(JSON.stringify(response.data));
    }).catch((error) => {
      console.log(error);
    });
    
    // setPilots(sliceData([...allPilots, newPilot], page, 5));
    closePopup();
  };
  

  const closePopup = () => {
    setShowPopup(false);
  };

  const submitPopup = () => {
    const form = document.getElementById('new-pilot-form');
    form.dispatchEvent(new Event('submit', { cancelable: true }));
  };

  return (
    <div className='dashboard-content'>
      <DashboardHeader
        btnText='New pilot'
        onClick={() => setShowPopup(true)}
      />
      {showPopup && 
        <div className='popup'>
          <form id='new-pilot-form' onSubmit={handleSubmit}>
            <label>
              Name:
              <input type='text' name='Name' />
            </label>
            <label>
              License:
              <input type='text' name='LID' />
            </label>
            <label>
              Experience:
              <input type='number' name='Exp' />
            </label>
            <label>
              Email ID:
              <input type='email' name='Email' />
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
          <h2>Pilots List</h2>
          
        </div>

        <table className='pilots-table'>
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>License</th>
              <th>Experience</th>
              <th>Email ID</th>
            </tr>
          </thead>
          {
            <tbody>
              {pilots?.map((pilot, index) => (
                <tr key={index}>
                  <td><span>{index+1}</span></td>
                  <td>
                    <div>
                      <span>{`${pilot['PilotName']}`}</span>
                    </div>
                  </td>
                  <td><span>{pilot['LicenseID']}</span></td>
                  <td><span>{`${pilot['Experience']} Years`}</span></td>
                  <td><span>{pilot['Email']}</span></td>
                </tr>
              ))}
            </tbody>
          }
        </table>

      
  </div>}
</div>
);
}

export default Pilots;





