import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import DashboardPage from './pages/DashboardPage';
import CoinPage from './pages/Coin';


function App(){
  return (
  <div>
    <BrowserRouter>
    <Routes>
     <Route path='/' element={<Home/>} />
     <Route path='/dashboard' element={<DashboardPage/>} />
     <Route path='/coin/:id' element={<CoinPage/>} />
     
     

    </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App;