import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core';

export default () => {
    return (
        <div>
            <Link to='/neogotchi/world' style={{textDecoration:'none'}}> <Button style={{color:'white', background:'skyblue'}}>Back to World</Button> </Link>
        </div>
    )
}
