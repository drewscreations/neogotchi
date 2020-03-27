import React from 'react'
import { Button } from '@material-ui/core';
import axios from 'axios';

export default function FeedBtn(props) {
    const randomVal = (num) => {
        Math.random()*num
    }

    const clickHandler = (e, id) => {
        e.preventDefault();
        // add user purchasing food after testing is completed
        axios.put(`http://localhost:8000/api/neoGotchi/${id}/edit`, {status:{hunger:props.neogotchi.status.hunger+randomVal(20), happiness:props.neogotchi.status.happiness+randomVal(20)}})
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    return (
        <div>
            <Button onClick={e => clickHandler(e, props.neogotchi._id)}>Feed</Button>
        </div>
    )
}
