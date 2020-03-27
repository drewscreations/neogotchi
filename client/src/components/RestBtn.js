import React from 'react'
import { Button } from '@material-ui/core';
import axios from 'axios';

export default function RestBtn(props) {
    const randomVal = (num) => {
        Math.random()*num
    }

    const clickHandler = (e, id) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/neoGotchi/${id}/edit`, {status:{hunger:props.neogotchi.status.hunger-randomVal(10), happiness:props.neogotchi.status.happiness+randomVal(10)}})
            .then(res => console.log(res))
            .catch(err => console.log(err));
        axios.put(`http://localhost:8000/api/neoGotchi/${id}/edit`, {exp:{strength:props.neogotchi.exp.strength+randomVal(10), dexterity:props.neogotchi.exp.dexterity+randomVal(10), intelligence:props.neogotchi.exp.intelligence+randomVal(10)}})
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    return (
        <div>
            <Button onClick={e => clickHandler(e, props.neogotchi._id)}>Feed</Button>
        </div>
    )
}