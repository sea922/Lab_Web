import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';
// import "./Header.css";


export default function Header() {
  return (
    <div className='header'>
      <IconButton>
        <PersonIcon fontsize="large" className='header__icon'/>
      </IconButton>
      <img className='header__logo' src='logo192.png'/>
      <IconButton>
        <ForumIcon fontsize="large" className='header__icon'/>
      </IconButton>
    </div>
  )
}
