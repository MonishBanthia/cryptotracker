import React from 'react'
import './styles.css'
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';


function Grid({ coin }) {
  return (
    <div className={`grid-container ${coin.price_change_percentage_24h < 0 && 'border-red'}`}>
      <div className='info-grid'>
        <img src={coin.image} className='coin-logo' />
        <div className='name-col'>
          <p className='coin-symbol'>{coin.symbol}</p>
          <p className='coin-name'>{coin.name}</p>
        </div>
      </div>
      {coin.price_change_percentage_24h > 0 ? <div className='chip-flex'>
        <div className='price-chip'>{coin.price_change_percentage_24h.toFixed(2)}%</div>
        <div className='icon-chip'><TrendingUpRoundedIcon /></div>
      </div>
        :
        <div className='chip-flex'>
          <div className='price-chip chip-red'>{coin.price_change_percentage_24h.toFixed(2)}%</div>
          <div className='red-icon'><TrendingDownRoundedIcon /></div>
        </div>
      }
      <div className='info-container'>
        <h3 className='coin-price' style={{ color: coin.price_change_percentage_24h > 0 ? 'green' : 'red' }}>${coin.current_price.toLocaleString()}</h3>
        <p className='info-text'>Market Cap: ${coin.market_cap.toLocaleString()}</p>
        <p className='info-text'>Total Volume: {coin.total_volume.toLocaleString()}</p>
      </div>

    </div>
  )
}

export default Grid