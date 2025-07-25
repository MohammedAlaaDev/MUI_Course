import React from 'react'
import { Outlet } from 'react-router-dom'

import { Avatar, Link, Typography, Toolbar, AppBar } from '@mui/material';

import csvImg from "../assets/csv2.jpg"

export default function Root() {
    return (
        <>

            <AppBar position="static">
                <Toolbar>
                    <Link color="inherit" sx={{ transition: "0.3s", flexGrow: 1, "&:hover": {color: "red"}}} underline="none" href="/">MY Expenses</Link>

                    <Typography variant="subtitle1" component="p" mr={2}>
                        Ali Hassan
                    </Typography>

                    <Avatar alt="castlevania" src={csvImg} />
                    {/* <Avatar alt="c" src="https://mui.com/static/images/avatar/1.jpg" /> */}
                </Toolbar>
            </AppBar>




            <Outlet />
        </>
    )
}
