import React from 'react'
import { AppBar, Avatar, Link, Toolbar, Typography } from '@mui/material'
import csvImg from '../assets/csv2.jpg';

export default function AppBarComp({ drawerWidth }) {
    return (
        <AppBar position="static" sx={{ width: `calc(100% - ${drawerWidth})`, ml: drawerWidth }}>
            <Toolbar sx={{ justifyContent: "space-between" }}>
                <Link color="inherit" underline="none" href="/">MY Expenses</Link>

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
