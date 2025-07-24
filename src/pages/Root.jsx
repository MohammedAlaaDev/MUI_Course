import React from 'react'
import { Outlet } from 'react-router-dom'

import Button from '@mui/material/Button';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import IconButton from '@mui/material/IconButton'
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
export default function Root() {
    return (
        <>

            <Button variant="text">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>

            <Button sx={{margin: "0 auto", display: "flex"}} startIcon={<AddReactionIcon />} variant="contained" color="error">
                add reaction
            </Button>




            <IconButton color="info" size="large">
                <AutoAwesomeMotionIcon fontSize="large" />
            </IconButton>




            
            <Outlet />
        </>
    )
}
