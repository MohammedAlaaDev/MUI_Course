import { useState } from 'react'
import { Outlet } from 'react-router-dom'

import AppBarComp from '../MUI Components/AppBarComp'
import DrawerComp from '../MUI Components/DrawerComp';

import { Box, createTheme, CssBaseline, ThemeProvider } from '@mui/material';

export default function Root() {
    let dw = "240px";
    const [myMode, setmyMode] = useState('light');

    const darkTheme = createTheme({
        palette: {
            // @ts-ignore
            mode: myMode,
            // @ts-ignore
            myColor: {
                main: '#647488',
                contrastText: '#fff',
            }
        },
    });
    return (
        <>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline />

                <AppBarComp drawerWidth={dw} />
                <DrawerComp drawerWidth={dw} fnc={setmyMode} mode={myMode} />

                <Box component="main" sx={{ ml: dw, mt: "50px", width: `calc(100% - ${dw})`, display: "flex", justifyContent: "center" }}>
                    <Outlet />
                </Box>
            </ThemeProvider>
        </>
    )
}
