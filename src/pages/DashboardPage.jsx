import React, { useEffect, useState } from 'react'
import Header from '../components/Common/Header'
import TabsComponent from '../components/Dashboard/Tabs'
import axios from 'axios';
import Search from '../components/Dashboard/Search';
import PaginationControlled from '../components/Dashboard/Pagination';
import Loader from '../components/Common/Loader';
import BackToTop from '../components/Common/BackToTop';


function DashboardPage() {

  const [coins, setCoins] = useState([]);
  const [paginatedcoins, setPaginatedCoins] = useState([]);

  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [Loading , setLoading] = useState(true);
  const handlePageChange = (event, value) => {
    setPage(value);
    var previousIndex = (value-1) * 10;
    setPaginatedCoins(coins.slice(previousIndex, previousIndex + 10))
  };


  // Suggested code may be subject to a license. Learn more: ~LicenseLog:590535210.
  const onsearchChange = (e) => {
    setSearch(e.target.value);
  };

  var filteredCoin = coins.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));

  useEffect(() => {
    // fetch(

    //  "https://pro-api.coingecko.com/api/v3/coins/list"

    // ).then((res)=>res.json()).then((data)=>{});
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false").then((res) => {
      console.log("response", res);
      setCoins(res.data);
      setPaginatedCoins(res.data.slice(0,10))
      setLoading(false);
    }).catch((e) => {
      console.log(e);
      setLoading(false);
    });
  }, []);


  return (
    <>
    <Header />
    <BackToTop/>
    {Loading ? (<Loader />) :
      (<div>
      <Search search={search} onsearchChange={onsearchChange} />
      <TabsComponent coins={search ? filteredCoin : paginatedcoins}  />
      {!search &&  <PaginationControlled page={page} handleChange={handlePageChange} />}
    </div>)}
    </>
  )
}

export default DashboardPage