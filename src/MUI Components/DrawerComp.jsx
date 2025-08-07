import { Divider, Drawer, Toolbar, List, ListItem, ListItemButton, ListItemIcon, ListItemText, IconButton } from '@mui/material';

import HomeIcon from '@mui/icons-material/Home';
import CreateIcon from '@mui/icons-material/Create';
import PersonIcon from '@mui/icons-material/Person';
import Settings from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import { useNavigate } from "react-router";
import { useLocation } from 'react-router-dom';

export default function DrawerComp({ drawerWidth, fnc, mode, dsp, drawer, closeDrawer }) {
    let location = useLocation();

    let navigate = useNavigate();

    let myList = [
        {
            text: "Home",
            icon: <HomeIcon />,
            path: "/",
        },
        {
            text: "Create",
            icon: <CreateIcon />,
            path: "/create",
        },
        {
            text: "Profile",
            icon: <PersonIcon />,
            path: "/profile",
        },
        {
            text: "Settings",
            icon: <Settings />,
            path: "/Settings",
        },
        {
            text: "Logout",
            icon: <LogoutIcon />,
            path: "/logout",
        },
    ]

    let myListUI = myList.map((obj) => {
        return (
            <ListItem disablePadding sx={{ bgcolor: location.pathname === obj.path ? "grey" : null }}>
                <ListItemButton onClick={() => {
                    navigate(obj.path);
                }}>
                    <ListItemIcon>
                        {obj.icon}
                    </ListItemIcon>
                    <ListItemText primary={obj.text} />
                </ListItemButton>
            </ListItem>
        )
    })

    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
                display: { xs: dsp, sm: "block" },
            }}

            variant={drawer.variant}
            open={drawer.open}
            anchor="left"
            onClose={() => {
                closeDrawer();
            }}
        >
            <Toolbar sx={{ justifyContent: "center" }}>
                <IconButton onClick={() => {
                    fnc(mode === "light" ? "dark" : "light");
                    localStorage.setItem("theme", mode === "light" ? "dark" : "light");
                }}>
                    {mode === "light" ? <LightModeIcon sx={{ color: "orange" }} /> : <DarkModeIcon />}
                </IconButton>
            </Toolbar>

            <Divider />

            <List>
                {myListUI}
            </List>
        </Drawer>
    )
}
