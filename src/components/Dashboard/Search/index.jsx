import React from 'react'
import './styles.css'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

function Search({search , onsearchChange }) {
//   const[search,setSearch]=useState('');

  return (
    <div className='search-flex'> 
    <SearchRoundedIcon/>
    <input 
    placeholder='Search' 
    type='text' 
    value={search} 
    onChange={(e)=>onsearchChange(e)}
    />
    </div>
  )
}

export default Search