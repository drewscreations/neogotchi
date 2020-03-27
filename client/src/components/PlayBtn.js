import React from 'react'
import { Button } from '@material-ui/core';
import axios from 'axios';

export default (props) => {
    const randomVal = (num) => {
        return Math.random()*num
    }

    const clickHandler = (e, id) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/neoGotchi/${id}/edit`, {status:{hunger:Math.floor(props.neogotchi.status.hunger-randomVal(15)), happiness:Math.floor(props.neogotchi.status.happiness+randomVal(30))}})
            .then(res => console.log(res))
            .catch(err => console.log(err));
        axios.put(`http://localhost:8000/api/neoGotchi/${id}/edit`, {exp: {dexterity: Math.floor(props.neogotchi.exp.dexterity+randomVal(20))}})
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    return (
            <Button onClick={e => clickHandler(e, props.neogotchi._id)} style={{color:'white', background: '#836379', margin: '4px'}}>Play</Button>
    )
}