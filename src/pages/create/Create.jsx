import "./Create.css";

import React, { useState } from 'react';

import { Box, Button, InputAdornment, styled, TextField } from "@mui/material";
import { blue } from "@mui/material/colors";

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export default function Create() {
    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(blue[700]),
        // @ts-ignore
        backgroundColor: theme.palette.myColor.main,
        '&:hover': {
            // @ts-ignore
            backgroundColor: theme.palette.myColor.hov,
        },
    }));
    let [text, setText] = useState("");
    let [price, setPrice] = useState("");
    return (
        <Box component="form" sx={{ width: "350px", display: "flex", flexDirection: "column", gap: "20px" }}>
            <TextField
                onChange={(e) => {
                    setText(e.target.value);
                }}
                value={text}
                label="Transaction Title"
                id="outlined-start-adornment"
                sx={{ m: 0, width: "100%" }}
                slotProps={{
                    input: {
                        startAdornment: <InputAdornment position="start"><ArrowRightAltIcon /></InputAdornment>,
                    },
                }}
                variant="filled"
            />
            <TextField
                onChange={(e) => {
                    // @ts-ignore
                    setPrice(Number(e.target.value));
                }}
                value={price}
                label="Amount"
                id="outlined-start-adornment"
                sx={{ m: 0, width: "100%" }}
                slotProps={{
                    input: {
                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                    },
                }}
                variant="filled"
            />
            <ColorButton variant="contained" sx={{ alignSelf: "self-start" }} onClick={() => {
                if (text !== "" && price !== "") {
                    fetch("http://localhost:3100/data", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ text, price })
                    });
                    setText("");
                    setPrice("");
                }
            }}>Submit<KeyboardArrowRightIcon /></ColorButton>
        </Box>
    )
}
