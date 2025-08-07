import { useState, useMemo } from 'react'
import { Outlet } from 'react-router-dom'

import AppBarComp from '../MUI Components/AppBarComp'
import DrawerComp from '../MUI Components/DrawerComp';

import { Box, createTheme, CssBaseline, ThemeProvider } from '@mui/material';

import getDesignTokes from "../style/myTheme";

export default function Root() {
    let dw = "240px";
    const [mode, setmyMode] = useState(localStorage.getItem("theme") !== undefined ? localStorage.getItem("theme") : 'light');

    let [theDisplay, setTheDisplay] = useState("none");
    let [drawervar, setDrawervar] = useState({ variant: "permanent", open: false });

    function closeDrawer() {
        setTheDisplay("none");
        setDrawervar({ variant: "permanent", open: false });
    }

    function showDrawer() {
        setTheDisplay("block");
        setDrawervar({ variant: "temporary", open: true });
    }

    let myTheme = useMemo(() => createTheme(getDesignTokes(mode)), [mode]);

    return (
        <>

            <ThemeProvider theme={myTheme}>
                <CssBaseline />

                <AppBarComp drawerWidth={dw} dspSet={setTheDisplay} showDrawer={showDrawer} />

                <DrawerComp drawerWidth={dw} fnc={setmyMode} mode={mode} dsp={theDisplay} drawer={drawervar} closeDrawer={closeDrawer} />

                <Box component="main" sx={{ padding: "10px", ml: { sm: dw }, mt: "50px", width: { xs: "100%", sm: `calc(100% - ${dw})` }, display: "flex", justifyContent: "center" }}>
                    <Outlet />
                </Box>
            </ThemeProvider>
        </>
    )
}
