import "./Home.css";

import React from 'react'

import { Box, Paper, Typography, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

export default function Home() {
    return (
        <Box>
            <Paper sx={{ position: "relative", mt: "20px", display: "flex", width: "366px", justifyContent: "space-between", alignItems: "center", padding: "25px 30px" }}>
                <Typography variant="h6" color="inherit">GYM</Typography>
                <Typography variant="h6" color="inherit">$100</Typography>
                <IconButton sx={{position: "absolute", right: "0", top: "0"}}>
                    <CloseIcon sx={{fontSize: "20px"}}/>
                </IconButton>
            </Paper>
        </Box>
    )
}

