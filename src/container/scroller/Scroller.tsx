import React, { useState, useEffect } from 'react'
// import { makeStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ExpandLess } from '@mui/icons-material';
import { IconButton } from '@material-ui/core';

const useStyles = makeStyles((theme:any) => ({
    toTop: {
        zIndex: 10,
        position: 'fixed',
        bottom: '2vh',
        // backgroundColor: '#DCDCDC',
        color: 'white',
        "&:hover, &.Mui-focusVisible": {
            transition: '0.3s',
            color: 'white',
            backgroundColor: '#a676d3'
        },
        [theme.breakpoints.up('xs')]: {
            right: '5%',
            backgroundColor: 'blueviolet',
        },
        [theme.breakpoints.up('lg')]: {
            right: '1.5%',
        },
    }
}))

const Scroller = ({
    showBelow,
}:any) => {

    const classes = useStyles();

    const [show, setShow] = useState(showBelow ? false : true)

    const handleScroll = () => {
        if (window.pageYOffset > showBelow) {
            if (!show) setShow(true)
        } else {
            if (show) setShow(false)
        }
    }

    const handleClick = () => {
        window[`scrollTo`]({ top: 0, behavior: `smooth` })
    }

    useEffect(() => {
        if (showBelow) {
            window.addEventListener(`scroll`, handleScroll)
            return () => window.removeEventListener(`scroll`, handleScroll)
        }
    })

    return (
        <div>
            {show &&
                <IconButton onClick={handleClick} className={classes.toTop} aria-label="to top" component="span">
                    <ExpandLess />
                </IconButton>
            }
        </div>
    )
}
export default Scroller
