import React, { useEffect, useState } from 'react'
import { GetCoinsAPI } from '../../../functions/GetCoinsAPI';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import "./styles.css"



function SelectCoins({crypto1 , crypto2 , handleCoinChange}) {
    
    const [allCoins , setAllCoins] = useState([]);


    // const handleCoinChange = (event , isCoin2) =>{
    //   if(isCoin2){
    //     setcrypto2(event.target.value);
    //   } else{
    //     setcrypto1(event.target.value);
    //   }
        
    // }

    useEffect(()=>{
        getData();
    },[]);

    async function getData(){
        const myCoins = await GetCoinsAPI();
        setAllCoins(myCoins);
    }


  return (
    <div className='coin-flex'>
      <p>Crypto 1 : </p>
    <Select
    style={{
     height: "2.5rem",
     color: "var(--white)",
     "& .MuiOutlinedInput-notchedOutline": {
       borderColor: "var(--white)",
     },
     "& .MuiSvgIcon-root": {
       color: "var(--white)",
     },
     "&:hover": {
       "&& fieldset": {
         borderColor: "#3a80e9",
       },
     },
   }}
  
   value={crypto1}
   label="Crypto 1"
   onChange={(event) => handleCoinChange(event ,  false)}>

    {allCoins.filter((item)=>item.id != crypto2).map((coin , i)=>  <MenuItem value={coin.id} key={i}>{coin.name}</MenuItem>)}
 </Select>


 <p>Crypto 2 : </p>
    <Select
    style={{
     height: "2.5rem",
     color: "var(--white)",
     "& .MuiOutlinedInput-notchedOutline": {
       borderColor: "var(--white)",
     },
     "& .MuiSvgIcon-root": {
       color: "var(--white)",
     },
     "&:hover": {
       "&& fieldset": {
         borderColor: "#3a80e9",
       },
     },
   }}
  
   value={crypto2}
   label="Crypto 2"
   onChange={(event) => handleCoinChange(event ,  true)}
 >
    {allCoins.filter((item)=>item.id != crypto1).map((coin ,i)=>  <MenuItem value={coin.id} key={i}>{coin.name}</MenuItem>)}
 </Select>
 </div>
  )
}

export default SelectCoins