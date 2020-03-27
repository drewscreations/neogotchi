import React, { useContext } from 'react'
import { Button } from '@material-ui/core';
import Context from '../context/context';
import axios from 'axios';

export default function WorkBtn(props) {
    const randomVal = (num) => {
        Math.random()*num
    }

    const context = useContext(Context);

    const clickHandler = (e, id) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/neoGotchi/${id}/edit`, {status:{hunger:props.neogotchi.status.hunger-randomVal(20), happiness:props.neogotchi.status.happiness-randomVal(10)}})
            .then(res => console.log(res))
            .catch(err => console.log(err));
        axios.put(`http://localhost:8000/api/neoGotchi/${id}/edit`, {exp:{strength:props.neogotchi.exp.strength+randomVal(30), dexterity:props.neogotchi.exp.dexterity+randomVal(20), intelligence:props.neogotchi.exp.intelligence+randomVal(10)}})
            .then(res => console.log(res))
            .catch(err => console.log(err));
        axios.put(`http://localhost:8000/api/user/${context.clientSideUser.userID}`, {gold: context.clientSideUser.gold + randomVal(500)})
            .then(res=>console.log(res))
            .catch(err => console.log(err));
    }

    return (
        <div>
            <Button onClick={e => clickHandler(e, props.neogotchi._id)}>Feed</Button>
        </div>
    )
}