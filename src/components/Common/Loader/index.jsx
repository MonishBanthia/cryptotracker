import { CircularProgress } from '@mui/material'
import React from 'react'
import './styles.css'

function Loader() {
  return (
    <div className='Loader-container'><CircularProgress/></div>
  )
}

export default Loader