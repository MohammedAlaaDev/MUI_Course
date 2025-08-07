import { useTheme, Typography } from '@mui/material';
import React from 'react';
import "./Error.css";

export default function Error() {

    let theme = useTheme();

    return (
        <>
            <Typography variant="h4" sx={{textAlign: "center"}} color={theme.palette.error.main}>There is no design yet
            <br />
            try again later
            </Typography>
        </>
    )
}
