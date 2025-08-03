import React from 'react'
import { Divider, Drawer, Toolbar, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

import HomeIcon from '@mui/icons-material/Home';
import CreateIcon from '@mui/icons-material/Create';

export default function DrawerComp({ drawerWidth }) {
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

            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <CreateIcon />
                        </ListItemIcon>
                        <ListItemText primary="Create" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Drawer>
    )
}
