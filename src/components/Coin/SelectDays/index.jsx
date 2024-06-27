import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './styles.css'

export default function SelectDays({days , handleDaysChange}) {
  const [days, setDays] = React.useState(30);

  const handleChange = (event) => {
    setDays(event.target.value);
  };

  return (
    <div className='select-days'>
      <p>Price Change In</p>
        
        <Select
           style={{
            height: "2.5rem",
            color: "var(--white)",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "var(--white)",
            },
            "& .MuiSvgIcon-root": {
              color: "var(--white)",
            },
            "&:hover": {
              "&& fieldset": {
                borderColor: "#3a80e9",
              },
            },
          }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={days}
          label="Days"
          onChange={handleDaysChange}
        >
          <MenuItem value={7}>7 Days</MenuItem>
          <MenuItem value={30}>30 Days</MenuItem>
          <MenuItem value={60}>60 Days</MenuItem>
          <MenuItem value={120}>120 Days</MenuItem>
          <MenuItem value={365}>1 Year</MenuItem>
         

        </Select>
      
    </div>
  );
}
