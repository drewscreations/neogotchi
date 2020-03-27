import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "../react-auth0-spa";

import { fade, makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem } from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home';
import PublicIcon from '@material-ui/icons/Public';
import ChildFriendlyIcon from '@material-ui/icons/ChildFriendly';
import StorefrontIcon from '@material-ui/icons/Storefront';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import InventoryBar from './InventoryBar';
import StatBar from './StatBar';
import Context from '../context/context';

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
    icons: {
        display:'inline-block'
    }
}));

export default () => {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    const [anchor, setAnchor] = useState(null);

    const context = React.useContext(Context);

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
            {isAuthenticated && (
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"
                aria-controls="navbar" aria-haspopup="true" onClick={clickHandler}
                >
                    <EmojiPeopleIcon/>
                </IconButton>
            )}

            <Typography variant="h6" className={classes.title}>
                {isAuthenticated? 
                    `Hello, ${context.clientSideUser.name}!`
                :
                    'NeoGotchi'}
            </Typography>
            {/* {!isAuthenticated && <Button color='inherit' onClick={() => loginWithRedirect({})}>Log in</Button>} */}

            {isAuthenticated ? (
                <span>
                    <Menu
                        id="navbar"
                        anchorEl={anchor}
                        keepMounted
                        open={Boolean(anchor)}
                        onClose={closeHandler}
                    >
                        <NavLink style={{textDecoration:'none', color:'#836379'}} to='/neogotchi/home'>
                            <MenuItem onClick={closeHandler}><HomeIcon/> Home</MenuItem>
                        </NavLink>
                        {/* <MenuItem onClick={closeHandler}><NavLink style={{textDecoration:'none'}} to='/profile'>Profile</NavLink></MenuItem> */}
                        <NavLink style={{textDecoration:'none', color:'#836379'}} to='/neogotchi/world'>
                            <MenuItem onClick={closeHandler}><PublicIcon/> World</MenuItem>
                        </NavLink>
                        <NavLink style={{textDecoration:'none', color:'#836379'}} to='/neogotchi/hatchery'>
                        <MenuItem onClick={closeHandler}><ChildFriendlyIcon/>Hatchery</MenuItem>
                        </NavLink>
                        {/* <NavLink style={{textDecoration:'none', color:'#836379'}} to='/neogotchi/market'>
                            <MenuItem onClick={closeHandler}>Market</MenuItem>
                        </NavLink> */}
                        <NavLink style={{textDecoration:'none', color:'#836379'}} to='/neogotchi/generalstore'>
                            <MenuItem onClick={closeHandler}><StorefrontIcon/>Store</MenuItem>
                        </NavLink>
                        {/* <NavLink style={{textDecoration:'none', color:'#836379'}} to='/neogotchi/wildarea'>
                            <MenuItem onClick={closeHandler}>Wild Area</MenuItem>
                        </NavLink> */}
                        <MenuItem style={{textDecoration:'none', color:'#836379'}}  onClick={() => logout()}>
                            <ExitToAppIcon/>Log out
                        </MenuItem>
                    </Menu>
                    {/* <InventoryBar className={classes.icons}/> */}
                    <StatBar className={classes.icons}/>
                </span>
            )
            :
            <Button color='inherit' onClick={() => loginWithRedirect({})}>Log in</Button>
            }
            </Toolbar>
        </AppBar>
    </div>
);
};
