import React from 'react'
// import { navigate } from '@reach/router'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core';


export default function GeneralStore() {
    return (
        <div>
            <h1>GeneralStore</h1>
            {/* <button onClick={()=>navigate('/neogotchi/world')}>back to world</button> */}
            <Link to='/neogotchi/world' style={{textDecoration:'none'}}> <Button style={{color:'white', background:'skyblue'}}>back to world</Button> </Link>
        </div>
    )
}
