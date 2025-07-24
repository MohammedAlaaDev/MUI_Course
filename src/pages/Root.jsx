import React from 'react'
import { Outlet } from 'react-router-dom'

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Avatar, Link, Typography } from '@mui/material';

import csvImg from "../assets/csv2.jpg"

export default function Root() {
    return (
        <>

            <AppBar position="static">
                <Toolbar>
                    <Link color="inherit" sx={{ flexGrow: 1 }} underline="none" href="/">MY Expenses</Link>

                    <Typography variant="subtitle1" component="p" mr={2}>
                        Ali Hassan
                    </Typography>

                    <Avatar alt="castlevania" src={csvImg} />
                </Toolbar>
            </AppBar>




            <Outlet />
        </>
    )
}
