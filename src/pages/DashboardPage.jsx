import React, { useEffect, useState } from 'react'
import Header from '../components/Common/Header'
import TabsComponent from '../components/Dashboard/Tabs'
import axios from 'axios';
import Search from '../components/Dashboard/Search';


function DashboardPage() {

  const [coins , setCoins] = useState([]);
  const[search,setSearch]=useState('');


// Suggested code may be subject to a license. Learn more: ~LicenseLog:590535210.
  const onsearchChange=(e)=>{
    setSearch(e.target.value);
  };

  var filteredCoin = coins.filter((item)=> item.name.toLowerCase().includes(search.toLowerCase()));

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
        <Search search={search} onsearchChange={onsearchChange} />
        <TabsComponent coins={filteredCoin}/>
        
    </div>
  )
}

export default DashboardPage