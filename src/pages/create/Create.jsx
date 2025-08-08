import "./Create.css";

import { useState } from 'react';

import { Box, Button, InputAdornment, styled, TextField } from "@mui/material";
import { blue } from "@mui/material/colors";

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export default function Create() {
    let [title, settitle] = useState("");
    let [price, setprice] = useState(0);
    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(blue[700]),
        // @ts-ignore
        backgroundColor: theme.palette.myColor.main,
        '&:hover': {
            // @ts-ignore
            backgroundColor: theme.palette.myColor.hov,
        },
    }));
    return (
        <Box component="form" sx={{ width: "350px", display: "flex", flexDirection: "column", gap: "20px" }}>
            <TextField
                label="Transaction Title"
                id="outlined-start-adornment"
                sx={{ m: 0, width: "100%" }}
                slotProps={{
                    input: {
                        startAdornment: <InputAdornment position="start"><ArrowRightAltIcon /></InputAdornment>,
                    },
                }}
                variant="filled"
                onChange = {(e)=> {
                    settitle(e.target.value)
                }}
            />
            <TextField
                label="Amount"
                id="outlined-start-adornment"
                sx={{ m: 0, width: "100%" }}
                slotProps={{
                    input: {
                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                    },
                }}
                variant="filled"
                onChange = {(e)=>{
                    setprice(Number(e.target.value))
                }}
            />
            <ColorButton variant="contained" sx={{ alignSelf: "self-start" }} onClick={ (e) => {
                fetch("http://localhost:3100/data", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body : JSON.stringify({title, price}),
                })
            }
            }>Submit<KeyboardArrowRightIcon /></ColorButton>
        </Box>
    )
}
