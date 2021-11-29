import React, {useState} from 'react';
import {alpha, AppBar, Avatar, Badge, Grid, InputBase, makeStyles, Toolbar, Typography} from "@material-ui/core";
import {Cancel, Mail, Notifications, Search} from "@material-ui/icons";

type StylesType = {
    open: boolean
}

const useStyles = makeStyles(theme => ({
    logoLarge: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block'
        }
    },
    logoSmall: {
        display: 'block',
        [theme.breakpoints.up('sm')]: {
            display: 'none'
        }
    },
    search: {
        display: 'flex',
        alignItems: 'center',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        [theme.breakpoints.down('sm')]: {
            display: (props: StylesType) => props.open ? 'flex' : 'none',
        },
    },
    input: {
        color: 'white',
        marginLeft: theme.spacing(1),
    },
    icons: {
        alignItems: 'center',
            display: (props: StylesType) => props.open ? 'none' : 'flex',
    },
    badge: {
        marginRight: theme.spacing(2),
    },
    searchButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
            display: 'none'
        },
    },
    cancel: {
        [theme.breakpoints.up('md')]: {
            display: 'none'
        },
    },
}))

export const Navbar = () => {
    const [open, setOpen] = useState<boolean>(false)
    const s = useStyles({
        open
    });

    const openHandler = () => {
        setOpen(true)
    }
    const closeHandler = () => {
        setOpen(false)
    }


    return (
        <AppBar>
            <Toolbar>
                <Grid
                    container
                    justifyContent={"space-between"}
                    alignItems={'center'}
                >
                    <Typography variant={"h6"} className={s.logoLarge}>
                        Nirweint
                    </Typography>
                    <Typography variant={"h6"} className={s.logoSmall}>
                        Nir
                    </Typography>
                    <div className={s.search}>
                        <Search/>
                        <InputBase placeholder={'Search...'} className={s.input}/>
                        <Cancel className={s.cancel} onClick={closeHandler}/>
                    </div>
                    <div className={s.icons}>
                        <Search className={s.searchButton} onClick={openHandler}/>
                        <Badge badgeContent={4} color="secondary" className={s.badge}>
                            <Mail/>
                        </Badge>
                        <Badge badgeContent={2} color="secondary" className={s.badge}>
                            <Notifications/>
                        </Badge>
                        <Avatar alt={'avatar'}
                                src={'https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png'}/>
                    </div>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}