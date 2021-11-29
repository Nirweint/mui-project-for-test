import React from 'react';
import {AppBar, makeStyles, Toolbar, Typography} from "@material-ui/core";

const useStyles = makeStyles(theme => ({

}))

export const Navbar = () => {

    const s = useStyles();

    return (
        <AppBar>
            <Toolbar>
                <Typography variant={"h6"} >
                    Nirweint
                </Typography>
            </Toolbar>
        </AppBar>
    );
}