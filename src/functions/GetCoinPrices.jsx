import axios from "axios";

export const GetCoinPrices=(id , days)=>{
  const prices = 
  axios.get(
    // Suggested code may be subject to a license. Learn more: ~LicenseLog:591900162.
    `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`
).then((res) => {
    console.log("response", res.data.prices);
    return res.data.prices;
   
}).catch((e) => {
    console.log(e);
    
});
return prices;
}