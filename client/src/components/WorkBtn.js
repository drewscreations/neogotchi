import React, { useContext } from 'react'
import { Button } from '@material-ui/core';
import Context from '../context/context';
import axios from 'axios';

export default (props) => {
    const randomVal = (num) => {
        return Math.random()*num
    }

    const context = useContext(Context);

    const clickHandler = (e, id) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/neoGotchi/${id}/edit`, {status:{hunger:Math.floor(props.neogotchi.status.hunger-randomVal(20)), happiness:Math.floor(props.neogotchi.status.happiness-randomVal(10))}})
            .then(res => console.log(res))
            .catch(err => console.log(err));
        axios.put(`http://localhost:8000/api/neoGotchi/${id}/edit`, {exp:{strength:Math.floor(props.neogotchi.exp.strength+randomVal(30)), dexterity:Math.floor(props.neogotchi.exp.dexterity+randomVal(20)), intelligence:Math.floor(props.neogotchi.exp.intelligence+randomVal(10))}})
            .then(res => console.log(res))
            .catch(err => console.log(err));
        axios.put(`http://localhost:8000/api/user/${context.clientSideUser.userID}`, {gold: Math.floor(context.clientSideUser.gold + randomVal(500))})
            .then(res=>console.log(res))
            .catch(err => console.log(err));
    }

    return (
            <Button onClick={e => clickHandler(e, props.neogotchi._id)} style={{color:'white', background: '#836379', margin: '4px'}}>Work</Button>
    )
}