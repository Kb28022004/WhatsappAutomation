import React from 'react'
import './LoginNotFound.css'
import { Button } from '@mui/material'

const LoginNotFound = ({notFoundImage,notFoundTitle,notFoundSubtitle,notFoundButton}) => {
  return (
    <div className='loginNotFoundMainContainer' >
<img src={notFoundImage} alt="" />
<h3>{notFoundTitle}</h3>
<p>{notFoundSubtitle}</p>
{notFoundButton}

    </div>
  )
}

export default LoginNotFound