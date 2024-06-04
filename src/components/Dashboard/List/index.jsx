import React from 'react'
import './styles.css'
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import { Tooltip } from '@mui/material';

function List({ coin }) {
    return (
        <tr className='list-row'>
            <td className='info-row'>
                <img src={coin.image} className='coin-logo' />
                </td>
                <td>
                <div className='name-col'>
                    <p className='coin-symbol'>{coin.symbol}</p>
                    <p className='coin-name'>{coin.name}</p>
                </div>
            </td>
            <Tooltip title="price change in 24Hrs" placement="bottom-start">
            {coin.price_change_percentage_24h > 0 ?
             <td className='chip-flex'>
                <div className='price-chip'>{coin.price_change_percentage_24h.toFixed(2)}%</div>
                <div className='icon-chip'><TrendingUpRoundedIcon /></div>
            </td>
                :
                <td className='chip-flex'>
                    <div className='price-chip chip-red'>{coin.price_change_percentage_24h.toFixed(2)}%</div>
                    <div className='red-icon'><TrendingDownRoundedIcon /></div>
                </td>
            }
            </Tooltip>
            <Tooltip title="current price" placement="bottom-start">
            <td>
                <h3 className='coin-price' style={{ color: coin.price_change_percentage_24h > 0 ? 'green' : 'red' }}>${coin.current_price.toLocaleString()}</h3>
            </td>
            </Tooltip>
        


        </tr>
    )
}

export default List