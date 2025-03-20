import { Switch } from '@mui/material'
import React, { useState } from 'react'

const MuiSwitch = () => {
    const [checked, setChecked] = useState(true);

  return (
     <Switch
          checked={checked}
          onChange={() => setChecked(!checked)}
          sx={{
            "& .MuiSwitch-switchBase.Mui-checked": {
    
              color: "green", // Inner circle color when checked
            },
            "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
              backgroundColor: "lightgreen", // Track color when checked
              border: "2px solid blue", // Border around the switch
            },
            "& .MuiSwitch-track": {
              backgroundColor: "#ccc", // Default track color
              border: "2px solid blue", // Default border
            },
          }}
        />
  )
}

export default MuiSwitch