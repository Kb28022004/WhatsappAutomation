import { Card, Grid2 } from '@mui/material'
import React from 'react'
import './ScriwoWorks.css'

const ScriwoWorks = ({howScriwoWorksImage,howScriwoWorksContent}) => {
  return (
    <Grid2 item >
        <Card className="howScriwoWorks">
            <img src={howScriwoWorksImage} alt="" />
            <p dangerouslySetInnerHTML={{ __html: howScriwoWorksContent }}/>
        </Card>
    </Grid2>
  )
}

export default ScriwoWorks