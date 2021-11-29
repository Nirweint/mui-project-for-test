import React from 'react';
import {Container, makeStyles, Typography} from "@material-ui/core";
import {Home, List, Person, TabletMac} from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
    container: {
        height: '100vh',
        paddingTop: theme.spacing(10),
        backgroundColor: theme.palette.primary.main,
        position: 'sticky',
        top: 0,
        [theme.breakpoints.up('md')]: {
            backgroundColor: 'white',
            color: '#555',
            borderRight: '1px solid #a7a7a7',
        },
        color: '#fff',
    },
    item: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: theme.spacing(4),
        [theme.breakpoints.up('sm')]: {
            marginBottom: theme.spacing(3),
            cursor: 'pointer',
        },
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'center',
        },
    },
    icon: {
        marginRight: theme.spacing(1),
    },
    text: {
        fontWeight: 500,
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
}))

export const Leftbar = () => {

    const s = useStyles();

    return (
        <Container className={s.container}>
            <div className={s.item}>
                <Home className={s.icon}/>
                <Typography className={s.text}>
                    Homepage
                </Typography>
            </div>
            <div className={s.item}>
                <Person className={s.icon}/>
                <Typography className={s.text}>
                    Friends
                </Typography>
            </div>
            <div className={s.item}>
                <List className={s.icon}/>
                <Typography className={s.text}>
                    Lists
                </Typography>
            </div>
            <div className={s.item}>
                <TabletMac className={s.icon}/>
                <Typography className={s.text}>
                    Apps
                </Typography>
            </div>
        </Container>
    );
}