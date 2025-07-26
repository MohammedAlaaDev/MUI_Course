import React from 'react'
import { Divider, Drawer, Toolbar } from '@mui/material'

export default function DrawerComp({drawerWidth}) {
    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
            variant="permanent"
            anchor="left"
        >
            <Toolbar />
            <Divider />

            <Divider />

        </Drawer>
    )
}
