import { Button, List, ListItem } from '@mui/material'
import './LandingPage.css'
import { NavLink } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div className='landingPageMainContainer'>
        <div className="landingPage-first-section">
            <h2>SCRI<span>W</span>O </h2>
            <div className="landingPageListContainer">
               <List className='landingPageList' >
               <ListItem className='landingPageListItem' component={NavLink} to='/' >Home</ListItem>
               <ListItem className='landingPageListItem' component={NavLink} to='/contact' >Contact Us</ListItem>
               </List>
                <div className="landingPageButtonContainer">
                <Button className='landingPageLoginButton' component={NavLink} to='/login'>Login</Button>
                <Button className='landingPageSignUpButton' component={NavLink} to='/register'>Sign Up</Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LandingPage