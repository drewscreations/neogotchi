import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "../react-auth0-spa";

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
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

    const classes = useStyles();

return (
    <div className={classes.root}>
        <AppBar position="static">
            <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
                NeoGotchi
            </Typography>
            {!isAuthenticated && <Button color='inherit' onClick={() => loginWithRedirect({})}>Log in</Button>}

            {isAuthenticated && (
                <span>
                    <NavLink to='/neogotchi/home'>Home</NavLink>&nbsp;
                    <NavLink to='/profile'>Profile</NavLink>&nbsp;
                    <NavLink to='/neogotchi/world'>World</NavLink>&nbsp;
                    <NavLink to='/neogotchi/hatchery'>Hatchery</NavLink>&nbsp;
                    <NavLink to='/neogotchi/market'>Market</NavLink>&nbsp;
                    <NavLink to='/neogotchi/generalstore'>General Store</NavLink>&nbsp;
                    <NavLink to='/neogotchi/wildarea'>Wild Area</NavLink>&nbsp;
                    <Button  color='inherit' onClick={() => logout()}>Log out</Button>
                </span>
            )}
            </Toolbar>
        </AppBar>
    </div>
);
};
