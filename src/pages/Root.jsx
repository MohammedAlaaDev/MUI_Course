import React from 'react'
import { Outlet } from 'react-router-dom'

import AppBarComp from '../MUI Components/AppBarComp'
import DrawerComp from '../MUI Components/DrawerComp';

export default function Root() {
    let dw = "240px";
    return (
        <>

            <AppBarComp drawerWidth={dw} />
            <DrawerComp drawerWidth={dw} />

            <Outlet />
        </>
    )
}
