import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import './navbar.css'

function Navbar() {
  return (
    <div className='outer'>
        <div className='left'>
            <MenuIcon />
        </div>
        <div className='right'>
            <div className='cart'>
                <ShoppingCartIcon />
            </div>
            <div className='notification'>
                <NotificationsNoneIcon />
            </div>
        </div>
    </div>
  )
}

export default Navbar