import React, { useState } from 'react'
import { Button } from '@material-ui/core';
import axios from 'axios';

export default function FeedBtn(props) {

    const clickHandler = (e, id) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/neoGotchi/${id}/update`, {hunger:props.neogotchi.hunger+(Math.random()*20)})
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    return (
        <div>
            <Button onClick={e => clickHandler(e, props.neogotchi._id)}>Feed</Button>
        </div>
    )
}
