// src/components/NavBar.js

import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import { NavLink } from 'react-router-dom';

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
            {/* Navbar links for testing */}
            <NavLink to='/neogotchi/home'>Home</NavLink>&nbsp;
            <NavLink to='/profile'>Profile</NavLink>&nbsp;
            <NavLink to='/neogotchi/world'>World</NavLink>&nbsp;
            <NavLink to='/neogotchi/hatchery'>Hatchery</NavLink>&nbsp;
            <NavLink to='/neogotchi/market'>Market</NavLink>&nbsp;
            <NavLink to='/neogotchi/generalstore'>General Store</NavLink>&nbsp;
            <NavLink to='/neogotchi/wildarea'>Wild Area</NavLink>&nbsp;
        </span>
    )}
    </div>
);
};

export default NavBar;