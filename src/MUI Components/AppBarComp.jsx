import React from 'react'
import { AppBar, Avatar, Link, Toolbar, Typography, Box, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import csvImg from '../assets/csv2.jpg';

export default function AppBarComp({ drawerWidth, dspSet, dsp }) {
    return (
        <AppBar position="static"
            sx={{
                width: { sm: `calc(100% - ${drawerWidth})` },
                ml: { sm: drawerWidth },
            }}>
            <Toolbar sx={{ justifyContent: "space-between" }}>
                <Box sx={{display: "flex", alignItems: "center", gap: "20px"}}>
                    <IconButton sx={{display: {sm: "none",}}} onClick={()=>{
                        dspSet(dsp==="none"? "block": "none");
                    }}>
                        <MenuIcon />
                    </IconButton>
                    <Link color="inherit" underline="none" href="/">MY Expenses</Link>
                </Box>

                <div className="user" style={{ display: "flex", alignItems: "center" }}>
                    <Typography variant="subtitle1" component="p" mr={2}>
                        Ali Hassan
                    </Typography>

                    <Avatar alt="castlevania" src={csvImg} />
                    {/* <Avatar alt="c" src="https://mui.com/static/images/avatar/1.jpg" /> */}
                </div>
            </Toolbar>
        </AppBar>
    )
}
