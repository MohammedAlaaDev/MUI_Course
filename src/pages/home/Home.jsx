import "./Home.css";

import React from 'react'

import { Box, Paper, Typography, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

export default function Home() {
    return (
        <Box>
            <Paper sx={{ position: "relative", mt: "20px", display: "flex", width: "366px", justifyContent: "space-between", alignItems: "center", padding: "10px 15px" }}>
                <Typography variant="h6" color="initial">GYM</Typography>
                <Typography variant="h6" color="initial">$100</Typography>
                <IconButton sx={{position: "absolute", right: "0", top: "0", transform: "translate(50%, -50%)"}}>
                    <CloseIcon sx={{fontSize: "20px"}}/>
                </IconButton>
            </Paper>
        </Box>
    )
}

