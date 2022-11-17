import React from 'react'
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';


import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';

export default function SwipeButtons() {
  return (
    <div className='swipeButtons'>
      <IconButton className='swipeButtons__repeat'>
        <ReplayIcon fontSize='large'/>
      </IconButton>
      <IconButton className='swipeButtons__left'>
        <CloseIcon fontSize='large'/>
      </IconButton>
      <IconButton className='swipeButtons__star'>
        <StarRateIcon fontSize='large'/>
      </IconButton>
      <IconButton className='swipeButtons__right'>
        <FavoriteIcon fontSize='large'/>
      </IconButton>
      <IconButton className='swipeButtons__lightning'>
        <FlashOnIcon fontSize='large'/>
      </IconButton>
    </div>
  )
}
