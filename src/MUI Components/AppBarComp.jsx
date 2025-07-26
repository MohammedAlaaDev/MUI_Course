import React from 'react'
import { AppBar, Avatar, Link, Toolbar, Typography } from '@mui/material'
import csvImg from '../assets/csv2.jpg';

export default function AppBarComp({drawerWidth}) {
    return (
        <AppBar position="static" sx={{width: `calc(100% - ${drawerWidth})`, ml: drawerWidth}}>
            <Toolbar>
                <Link color="inherit" sx={{ transition: "0.3s", flexGrow: 1, "&:hover": { color: "red" } }} underline="none" href="/">MY Expenses</Link>

                <Typography variant="subtitle1" component="p" mr={2}>
                    Ali Hassan
                </Typography>

                <Avatar alt="castlevania" src={csvImg} />
                {/* <Avatar alt="c" src="https://mui.com/static/images/avatar/1.jpg" /> */}
            </Toolbar>
        </AppBar>
    )
}
