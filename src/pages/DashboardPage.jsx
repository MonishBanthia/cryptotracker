import React, { useEffect, useState } from 'react'
import Header from '../components/Common/Header'
import TabsComponent from '../components/Dashboard/Tabs'
import axios from 'axios';


function DashboardPage() {

  const [coins , setCoins] = useState([]);

  useEffect(()=>{
    // fetch(
      
    //  "https://pro-api.coingecko.com/api/v3/coins/list"
     
    // ).then((res)=>res.json()).then((data)=>{});
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false").then((res)=>{
    console.log("response",res);
    setCoins(res.data);
  }).catch((e)=>{
    console.log(e);
  });
  } , []);

  
  return (
    <div>
        <Header/>
        <TabsComponent coins={coins}/>
        
    </div>
  )
}

export default DashboardPage