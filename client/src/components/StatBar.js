import React, { useContext } from 'react';
import { useAuth0 } from '../react-auth0-spa';
import Context from '../context/context'


export default function StatBar() {
    const context = useContext(Context);
    const { user } = useAuth0();

    return (
        <div>
            <h1>{context.clientSideUser.userID}: {context.clientSideUser.gold} gold</h1>
        </div>
    )
}
