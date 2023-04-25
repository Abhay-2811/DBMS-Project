import { useState } from 'react';
import './cardPayment.css'
import axios from 'axios'
const CardPayment = (props) => {
    const [email,setEmail] = useState();
    const handleSubmit = (event)=>{
        event.preventDefault();
        let data = JSON.stringify({
            "id": props.id,
            "email": email
          });
          
          let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://127.0.0.1:3000/AddBookings',
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
          
    }
  return (
    <div className='row'>
      <div className='col-75'>
        <div className='container'>
          <form onSubmit={handleSubmit}>
            <div className='row'>
              <div className='col-50'>
                <h3>Billing Address</h3>
                <label for='fname'>
                  <i className='fa fa-user'></i> Full Name
                </label>
                <input
                  type='text'
                  id='fname'
                  name='firstname'
                  placeholder='John M. Doe'
                />
                <label for='email'>
                  <i className='fa fa-envelope'></i> Email
                </label>
                <input
                  type='text'
                  id='email'
                  name='email'
                  placeholder='john@example.com'
                  onChange={(e)=>{setEmail(e.target.value)}}
                />
                <label for='adr'>
                  <i className='fa fa-address-card-o'></i> Address
                </label>
                <input
                  type='text'
                  id='adr'
                  name='address'
                  placeholder='542 W. 15th Street'
                />
                <label for='city'>
                  <i className='fa fa-institution'></i> City
                </label>
                <input
                  type='text'
                  id='city'
                  name='city'
                  placeholder='New York'
                />

                <div className='row'>
                  <div className='col-50'>
                    <label for='state'>State</label>
                    <input
                      type='text'
                      id='state'
                      name='state'
                      placeholder='NY'
                    />
                  </div>
                  <div className='col-50'>
                    <label for='zip'>Zip</label>
                    <input
                      type='text'
                      id='zip'
                      name='zip'
                      placeholder='10001'
                    />
                  </div>
                </div>
              </div>

              <div className='col-50'>
                <h3>Payment</h3>
                <label for='fname'>Accepted Cards</label>
                <div className='icon-container'>
                  <i className='fa fa-cc-visa' ></i>
                  <i className='fa fa-cc-amex' ></i>
                  <i className='fa fa-cc-mastercard' ></i>
                  <i className='fa fa-cc-discover' ></i>
                </div>
                <label for='cname'>Name on Card</label>
                <input
                  type='text'
                  id='cname'
                  name='cardname'
                  placeholder='John More Doe'
                />
                <label for='ccnum'>Credit card number</label>
                <input
                  type='text'
                  id='ccnum'
                  name='cardnumber'
                  placeholder='1111-2222-3333-4444'
                />
                <label for='expmonth'>Exp Month</label>
                <input
                  type='text'
                  id='expmonth'
                  name='expmonth'
                  placeholder='September'
                />

                <div className='row'>
                  <div className='col-50'>
                    <label for='expyear'>Exp Year</label>
                    <input
                      type='text'
                      id='expyear'
                      name='expyear'
                      placeholder='2018'
                    />
                  </div>
                  <div className='col-50'>
                    <label for='cvv'>CVV</label>
                    <input
                      type='text'
                      id='cvv'
                      name='cvv'
                      placeholder='352'
                    />
                  </div>
                </div>
              </div>
            </div>
            <input
              type='submit'
              value='Continue to checkout'
              className='btn'
            />
          </form>
        </div>
      </div>
    </div>
  )
}

export default CardPayment;