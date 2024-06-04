import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import DashboardPage from './pages/DashboardPage';


function App(){
  return (
  <div>
    <BrowserRouter>
    <Routes>
     <Route path='/' element={<Home/>} />
     <Route path='/dashboard' element={<DashboardPage/>} />
     
     

    </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App;