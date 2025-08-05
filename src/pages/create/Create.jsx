import "./Create.css";

import React from 'react';

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
            backgroundColor: blue[900],
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
            />
            <ColorButton variant="contained" sx={{ alignSelf: "self-start" }}>Submit<KeyboardArrowRightIcon/></ColorButton>
        </Box>
    )
}
