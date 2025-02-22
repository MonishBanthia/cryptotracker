import React from 'react'
import { ConvertDate } from './ConvertDate';

function SettingChartData(setChartData , prices1 , prices2) {
  if(prices2){
    setChartData({
      labels : prices1?.map((price)=> ConvertDate(price[0])),
      datasets:[{
          label : "crypto1",
          data: prices1.map((price)=> price[1]),
          borderColor:"#3a80e9",
          borderWidth: 1.5,
          fill : false,
          tension: 0.25,
          pointRadius:0,
          yAxisID: "crypto1",
      },
      {
        label : "crypto2",
        data: prices2.map((price)=> price[1]),
        borderColor:"#61c96f",
        borderWidth: 1.5,
        fill : false,
        tension: 0.25,
        pointRadius:0,
        yAxisID: "crypto2",
    }],
  });
  }
  else{
    
      setChartData({
          labels : prices1.map((price)=> ConvertDate(price[0])),
          datasets:[{
              data: prices1.map((price)=> price[1]),
              borderColor:"#3a80e9",
              backgroundColor: prices1 ? "transparent" : "rgba(58,128,233,0.1)",
           
              borderWidth: 1.5,
              fill : true,
              tension: 0.25,
              pointRadius:0,
              yAxisID: "crypto1",
          }],
      });
    
  }
 
}

export default SettingChartData