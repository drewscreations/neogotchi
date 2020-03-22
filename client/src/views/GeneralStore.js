import React from 'react'
import {navigate} from '@reach/router'

export default function GeneralStore() {
    return (
        <div>
            <h1>GeneralStore</h1>
            <button onClick={()=>navigate('/neogotchi/world')}>back to world</button>
        </div>
    )
}
