import React from 'react';
import { useAuth0 } from '../react-auth0-spa';
import { Redirect } from 'react-router-dom';

export default () => {
    const { loading, isAuthenticated } = useAuth0();

    if (!loading && isAuthenticated) {
        return <Redirect to='/neogotchi/home' push/>
    }

    return (
        <div>
            <h1>Login, some art that can be displayed in the login?</h1>
            <img src='https://i.ytimg.com/vi/fiu1qbH37yw/maxresdefault.jpg' alt='placeholder'/>
        </div>
    )
}