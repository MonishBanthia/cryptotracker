import axios from "axios";

export const GetCoinsAPI = () => {
    const myCoins = axios
    .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false").then((res) => {
        console.log("response", res);
        // setCoins(res.data);
        return res.data;
        // setPaginatedCoins(res.data.slice(0, 10))
        // setLoading(false);
    }).catch((e) => {
        console.log(e);
        // setLoading(false);
    });
    return myCoins;
};