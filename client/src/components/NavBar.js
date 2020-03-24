// src/components/NavBar.js

import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import { Link } from 'react-router-dom';

const NavBar = () => {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

return (
    <div>
    {!isAuthenticated && (
        <button onClick={() => loginWithRedirect({})}>Log in</button>
    )}

    {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
    
    {isAuthenticated && (
        <span>
            <Link to='/'>Home</Link>&nbsp;
            <Link to='/profile'>Profile</Link>
            <Link to='/neogotchi/world'>World</Link>
            <Link to='/neogotchi/home'>Home</Link>
            <Link to='/neogotchi/hatchery'>Hatchery</Link>
            <Link to='/neogotchi/market'>Market</Link>
            <Link to='/neogotchi/generalstore'>General Store</Link>
            <Link to='/neogotchi/wildarea'>Wild Area</Link>
        </span>
    )}
    </div>
);
};

export default NavBar;