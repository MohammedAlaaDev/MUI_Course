import React from 'react'
import { Outlet } from 'react-router-dom'
import Typography from '@mui/material/Typography'



export default function Root() {
    return (
        <>
            <Typography className="myTypo" variant="h1" component="h1" >
                Mohammed Alaa
            </Typography>

            <Typography sx={{color: "green"}} variant="h6" component="p">
                new text
            </Typography>

            <Typography border="5px blue dotted" sx={{color: "green", width: "fit-content"}} variant="h6" component="p">
                new text extra
            </Typography>

            <Typography mt={5} color="primary.dark" border="5px blue dotted" sx={{width: "fit-content"}} variant="h6" component="p">
                new text extra extraa
            </Typography>



            <Outlet />
        </>
    )
}
