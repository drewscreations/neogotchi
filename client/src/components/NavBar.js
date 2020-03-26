import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "../react-auth0-spa";

import { fade, makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem } from '@material-ui/core'
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
    marginRight: theme.spacing(2),
    },
    title: {
    flexGrow: 1,
    },
}));

export default () => {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    const [anchor, setAnchor] = useState(null);

    const classes = useStyles();

    const clickHandler = (e) => {
        e.preventDefault();
        setAnchor(e.currentTarget);
    }

    const closeHandler = () => {
        setAnchor(null);
    };

return (
    <div className={classes.root}>
        <AppBar position="static" style={{background:'#836379'}}>
            <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"
            aria-controls="simple-menu" aria-haspopup="true" onClick={clickHandler}
            >
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
                NeoGotchi
            </Typography>
            {!isAuthenticated && <Button color='inherit' onClick={() => loginWithRedirect({})}>Log in</Button>}

            {isAuthenticated && (
                <span>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchor}
                        keepMounted
                        open={Boolean(anchor)}
                        onClose={closeHandler}
                    >
                        <NavLink style={{textDecoration:'none', color:'#836379'}} to='/neogotchi/home'>
                            <MenuItem onClick={closeHandler}>Home</MenuItem>
                        </NavLink>
                        {/* <MenuItem onClick={closeHandler}><NavLink style={{textDecoration:'none'}} to='/profile'>Profile</NavLink></MenuItem> */}
                        <NavLink style={{textDecoration:'none', color:'#836379'}} to='/neogotchi/world'>
                            <MenuItem onClick={closeHandler}>World</MenuItem>
                        </NavLink>
                        <NavLink style={{textDecoration:'none', color:'#836379'}} to='/neogotchi/hatchery'>
                            <MenuItem onClick={closeHandler}>Hatchery</MenuItem>
                        </NavLink>
                        <NavLink style={{textDecoration:'none', color:'#836379'}} to='/neogotchi/market'>
                            <MenuItem onClick={closeHandler}>Market</MenuItem>
                        </NavLink>
                        <NavLink style={{textDecoration:'none', color:'#836379'}} to='/neogotchi/generalstore'>
                            <MenuItem onClick={closeHandler}>General Store</MenuItem>
                        </NavLink>
                        {/* <NavLink style={{textDecoration:'none', color:'#836379'}} to='/neogotchi/wildarea'>
                            <MenuItem onClick={closeHandler}>Wild Area</MenuItem>
                        </NavLink> */}
                    </Menu>
                    <Button  color='inherit' onClick={() => logout()}>Log out</Button>
                </span>
            )}
            </Toolbar>
        </AppBar>
    </div>
);
};
