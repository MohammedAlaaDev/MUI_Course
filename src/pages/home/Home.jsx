import "./Home.css";

import React, { useEffect, useState } from 'react'


import { Box, Paper, Typography, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

export default function Home() {

    let [myData, setmyData] = useState([]);

    useEffect(() => {

        fetch("http://localhost:3100/data")
            .then((res) => res.json())
            .then((data) => setmyData(data));
    }, []);

    let myDataUI = myData.map((obj) => {
        return (
            <Paper key={obj.id} sx={{ position: "relative", mt: "20px", display: "flex", width: "366px", justifyContent: "space-between", alignItems: "center", padding: "25px 30px" }}>
                <Typography variant="h6" color="inherit">{obj.text}</Typography>
                <Typography variant="h6" color="inherit">${obj.price}</Typography>
                <IconButton sx={{ position: "absolute", right: "0", top: "0" }}>
                    <CloseIcon sx={{ fontSize: "20px" }} />
                </IconButton>
            </Paper>
        )
    })

    return (
        <Box>
            {myDataUI}
        </Box>
    )
}

