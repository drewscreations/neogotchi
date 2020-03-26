import React, { useState } from 'react';
import { useAuth0 } from '../react-auth0-spa';
import  axios from 'axios';

export default () => {
    const { loading, user, isAuthenticated } = useAuth0();
    const [clientSideUser, setClientSideUser] = useState('');

    if (!loading && isAuthenticated){
        console.log(user.sub)
        axios.get(`http://localhost:8000/api/user/${user.sub}`)
            .then(res=>console.log(res))
            .catch(err=>console.log(err));
    }

    return (
        <div>
            {JSON.stringify(isAuthenticated)}
            <h1>Login, some art that can be displayed in the login?</h1>
        </div>
    )
}
