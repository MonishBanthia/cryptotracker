import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Common/Header';
import Loader from '../components/Common/Loader';
import { coinObject } from '../functions/ConvertObject';
import List from '../components/Dashboard/List';
import CoinInfo from '../components/Coin/CoinInfo';

function CoinPage() {
    const { id } = useParams();
    const[loading,setLoading] = useState(true);
    const[CoinData , setCoinData] = useState();
    useEffect(() => {
        if (id) {
            axios.get(
                `https://api.coingecko.com/api/v3/coins/${id}`
            ).then((res) => {
                console.log("response", res);
                coinObject(setCoinData , res.data);
                setLoading(false);
            }).catch((e) => {
                console.log(e);
                setLoading(false);
            });
        }

    }, [id])

    return (
        <div>
            <Header/>
            {loading ? <Loader/> : 
            <>
            <div className='grey-wrapper'>
            <List coin={CoinData}/>
            </div>

            <CoinInfo heading={CoinData.name} desc={CoinData.desc}/>
            
            </>}
        </div>
    )
}

export default CoinPage