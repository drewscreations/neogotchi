import React from 'react';
import { useAuth0 } from '../react-auth0-spa';
import { Redirect } from 'react-router-dom';
import WorldBackground from '../static/img/worldView.png'

export default () => {
    const { loading, isAuthenticated } = useAuth0();

    if (!loading && isAuthenticated) {
        return <Redirect to='/neogotchi/home' push/>
    }

    return (
        <div>
            <h1>Welcome to NeoGotchi, please login or redister!</h1>
            <img src={WorldBackground} width='800px' height='600px' alt='placeholder'/>
        </div>
    )
}