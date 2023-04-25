import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import MarketPlace from './pages/MarketPlace'
import { GoogleOAuthProvider } from '@react-oauth/google'
import Book from './pages/Book'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <GoogleOAuthProvider clientId='50080675681-si6uk6j6k20k3l12eu2s4cmt32mbeb3f.apps.googleusercontent.com'>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Home></Home>} />
            <Route
              exact
              path='/marketplace'
              element={<MarketPlace></MarketPlace>}
            />
            <Route exact path='/book' element={<Book></Book>}></Route>

          </Routes>
        </GoogleOAuthProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
