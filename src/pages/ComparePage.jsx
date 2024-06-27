import React, { useEffect, useState } from 'react'
import Header from '../components/Common/Header'
import SelectCoins from '../components/Compare/SelectCoins'
import SelectDays from '../components/Coin/SelectDays';
import { GetCoinData } from '../functions/GetCoinData';
import { coinObject } from '../functions/ConvertObject';
import { GetCoinPrices } from '../functions/GetCoinPrices';
import Loader from '../components/Common/Loader';
import List from '../components/Dashboard/List';
import CoinInfo from '../components/Coin/CoinInfo';
import SettingChartData from '../functions/SettingChartData';
import LineChart from '../components/Coin/LineChart';







function ComparePage() {

  const [crypto1, setcrypto1] = useState("bitcoin");
  const [crypto2, setcrypto2] = useState("ethereum");
  const [crypto1Data, setCrypto1Data] = useState({});
  const [crypto2Data, setCrypto2Data] = useState({});
  const [Loading, setLoading] = useState(true);
  const [days, setDays] = useState(30);
  const [priceType, setPriceType] = useState("prices");
  const [ChartData, setChartData] = useState({});

  async function handleDaysChange(event) {
    setLoading(true);
    setDays(event.target.value);
    const prices1 = await GetCoinPrices(crypto1, event.target.value, priceType);
      const prices2 = await GetCoinPrices(crypto2, event.target.value, priceType);

      SettingChartData(setChartData, prices1, prices2);
      setLoading(false);
  }

  useEffect(() => {
    getData();
  }, [])

  async function getData() {
    setLoading(true);
    const data1 = await GetCoinData(crypto1);
    const data2 = await GetCoinData(crypto2);
    if (data1) {
      coinObject(setCrypto1Data, data1);

    }

    if (data2) {
      coinObject(setCrypto2Data, data2);

    }

    if (data1 && data2) {
      const prices1 = await GetCoinPrices(crypto1, days, priceType);
      const prices2 = await GetCoinPrices(crypto2, days, priceType);

      if (prices1 && prices2) {
        SettingChartData(setChartData, prices1, prices2);
        setLoading(false);
      }


    }
    
  }


  const handleCoinChange = async (event, isCoin2) => {
    setLoading(true);
    if (isCoin2) {
      setcrypto2(event.target.value);
      const data = await GetCoinData(event.target.value);
      coinObject(setCrypto2Data, data);
      const prices1 = await GetCoinPrices(crypto1, days, priceType);
      const prices2 = await GetCoinPrices(crypto2, days, priceType);

      SettingChartData(setChartData, prices1, prices2);
      setLoading(false);
    }
    else {
      setcrypto1(event.target.value);
      const data = await GetCoinData(event.target.value);
      coinObject(setCrypto1Data, data);
    }



  };




  return (
    <div>
      <Header />
      {
        Loading ? (<Loader />) : (
          <>
            <div className='flex-compare'>
              <SelectCoins crypto1={crypto1} handleCoinChange={handleCoinChange} crypto2={crypto2} />
              <SelectDays days={days} handleDaysChange={handleDaysChange} noPtag={true} />
            </div>
            <div className='grey-wrapper' style={{ padding: "0rem 1rem" }}>
              <List coin={crypto1Data} />
            </div>
            <div className='grey-wrapper' style={{ padding: "0rem 1rem" }}>
              <List coin={crypto2Data} />
            </div>
            <div className='grey-wrapper'>
             
              <LineChart chartData={ChartData}  priceType={priceType} multiAxis={true}/>
            </div>
            <CoinInfo heading={crypto1Data.name} desc={crypto1Data.desc} />
            <CoinInfo heading={crypto2Data.name} desc={crypto2Data.desc} />
          </>)
      }
    </div>
  )
}

export default ComparePage