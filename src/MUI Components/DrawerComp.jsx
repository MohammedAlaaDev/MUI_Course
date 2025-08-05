import React from 'react'
import { Divider, Drawer, Toolbar, List, ListItem, ListItemButton, ListItemIcon, ListItemText, IconButton } from '@mui/material';

import HomeIcon from '@mui/icons-material/Home';
import CreateIcon from '@mui/icons-material/Create';
import PersonIcon from '@mui/icons-material/Person';
import Settings from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import { useNavigate } from "react-router";

export default function DrawerComp({ drawerWidth, fnc, mode }) {

    let navigate = useNavigate();

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
            <Toolbar sx={{ justifyContent: "center" }}>
                <IconButton onClick={() => {
                    fnc(mode === "light" ? "dark" : "light");
                }}>
                    {mode === "light" ? <LightModeIcon sx={{color: "orange"}} /> : <DarkModeIcon />}
                </IconButton>
            </Toolbar>

            <Divider />

            <List>
                <ListItem disablePadding>
                    <ListItemButton onClick={() => {
                        navigate("/");
                    }}>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton onClick={() => {
                        navigate("/create");
                    }}>
                        <ListItemIcon>
                            <CreateIcon />
                        </ListItemIcon>
                        <ListItemText primary="Create" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <PersonIcon />
                        </ListItemIcon>
                        <ListItemText primary="Profile" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <Settings />
                        </ListItemIcon>
                        <ListItemText primary="Settings" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <LogoutIcon />
                        </ListItemIcon>
                        <ListItemText primary="Logout" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Drawer>
    )
}
