import React from 'react'
import { Button } from '@material-ui/core';
import axios from 'axios';

export default (props) => {
    const randomVal = (num) => {
        return Math.random()*num
    }

    const clickHandler = (e, id) => {
        e.preventDefault();
        // add user purchasing food after testing is completed
        axios.put(`http://localhost:8000/api/neoGotchi/${id}/edit`, {status:{hunger:props.neogotchi.status.hunger+randomVal(20), happiness:props.neogotchi.status.happiness+randomVal(20)}})
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    return (
            <Button onClick={e => clickHandler(e, props.neogotchi._id)} style={{color:'white', background: '#836379', margin: '4px'}}>Feed</Button>
    )
}
