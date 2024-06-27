import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Common/Header';
import Loader from '../components/Common/Loader';
import { coinObject } from '../functions/ConvertObject';
import List from '../components/Dashboard/List';
import CoinInfo from '../components/Coin/CoinInfo';
import { GetCoinData } from '../functions/GetCoinData';
import { GetCoinPrices } from '../functions/GetCoinPrices';
import LineChart from '../components/Coin/LineChart';
import { ConvertDate } from '../functions/ConvertDate';
import SelectDays from '../components/Coin/SelectDays';

function CoinPage() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [CoinData, setCoinData] = useState();
    const [days, setDays] = useState(30);
    const [ChartData , setChartData] = useState({});


    useEffect(() => {
        if (id) {
            getdata();
        }

    }, [id]);

    async function getdata() {
        const Data = await GetCoinData(id);
        if (Data) {
            coinObject(setCoinData, Data);
            const prices = await GetCoinPrices(id, days);
            if(prices.length > 0){
                
                setChartData({
                    labels : prices.map((price)=> ConvertDate(price[0])),
                    datasets:[{
                        data: prices.map((price)=> price[1]),
                        borderColor:"#3a80e9",
                        backgroundColor: prices ? "transparent" : "rgba(58,128,233,0.1)",
                     
                        borderWidth: 1.5,
                        fill : true,
                        tension: 0.25,
                        pointRadius:0,

                    },],
                });
                setLoading(false);

            }
        }
    }

    const handleDaysChange=(event)=>{
            setDays(event.target.value);
       
    }


    return (
        <div>
            <Header />
            {loading ? <Loader /> :
                <>
                    <div className='grey-wrapper' style={{ padding: "0rem 1rem"}}>
                        <List coin={CoinData} />
                    </div>
                    <div className='grey-wrapper'>
                        <SelectDays days={days} handleDaysChange={handleDaysChange}/>
                        <LineChart chartData={ChartData}/>
                    </div>

                    <CoinInfo heading={CoinData.name} desc={CoinData.desc} />

                </>}
        </div>
    )
}

export default CoinPage