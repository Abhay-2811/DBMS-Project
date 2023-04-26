import React, { useState, preventDefault } from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import SideBar from './components/Sidebar';
import sidebar_menu from './constants/sidebar-menu';
import './App.css';
import Pilots from './pages/Pilots';
import Flights from './pages/Flights';
import { Admins } from './constants/admins';

function App () {
  const [onSuccess, setSuccess] = useState(true);
  const [email,setEmail] = useState();
  const [pass, setPass] = useState();
  const handleSubmit = (_email,_password)=>{
    if(Admins.Email === _email && Admins.Password === _password){
      setSuccess(false);
    }
    else{
      window.alert("Wrong credentials");
    }
  }
  return(
    <Router>
      {onSuccess && <div className='loginBox'>
            
                <div>
                    <label>Email</label>
                    <input type="email" id='email' onChange={(e)=>{setEmail(e.target.value)}}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="pass" id="pass" onChange={(e)=>{setPass(e.target.value)}}/>
                </div>
                <button type="submit" onClick={()=>handleSubmit(email,pass)}>Login</button>

      </div>}
      {!onSuccess && <div className='dashboard-container'>
        <SideBar menu={sidebar_menu} />
          
        <div className='dashboard-body'>
          <Routes>
            <Route exact path="/pilots" element={<Pilots />} />
            <Route exact path="/flights" element={<Flights/>} />
          </Routes>
        </div>
      </div>}
    </Router>
  )
}

export default App;
