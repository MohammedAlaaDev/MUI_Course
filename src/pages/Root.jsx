import React from 'react'
import { Outlet } from 'react-router-dom'

import AppBarComp from '../MUI Components/AppBarComp'
import DrawerComp from '../MUI Components/DrawerComp';

import { Box } from '@mui/material';

export default function Root() {
    let dw = "240px";
    return (
        <>

            <AppBarComp drawerWidth={dw} />
            <DrawerComp drawerWidth={dw} />

            <Box component="main" sx={{ ml: dw, mt: "50px", width: `calc(100% - ${dw})`, display: "flex", justifyContent: "center" }}>
                <Outlet />
            </Box>
        </>
    )
}
