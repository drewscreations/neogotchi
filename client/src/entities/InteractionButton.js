import React from 'react'
import { Button } from '@material-ui/core';
import axios from 'axios';



export default (props) => {
    const {text, neogotchi, clickHandler, buttonType, position} = props;
    const buttonStyle = {position: "absolute", color:'white', background: '#836379', margin: '4px', left:100*position+200, top:200}

    return (
            <Button onClick={e => clickHandler(e, buttonType)} style={buttonStyle}>{text}</Button>
    )
}
