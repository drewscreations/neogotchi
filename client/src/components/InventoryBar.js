import React, { useContext } from 'react';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import Context from '../context/context'

import { makeStyles } from '@material-ui/core/styles';
import { Popover, Typography, IconButton} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    typography: {
        padding: theme.spacing(2),
        color: '#836379'
    },
}));

export default () => {
    const context = useContext(Context);
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
    setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
    setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div>
        <IconButton style={{display:'inline-block'}} aria-describedby={id} variant="contained" color="inherit" onClick={handleClick}>
        <ShoppingBasketIcon/>
        </IconButton>
        <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        >
            <Typography className={classes.typography}>{context.clientSideUser.name}'s stuff <br/> more stuff <br/> ....</Typography>
        </Popover>
    </div>
    )
}
