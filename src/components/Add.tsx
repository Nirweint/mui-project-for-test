import React from 'react';
import {Container, makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    container: {
        paddingTop: theme.spacing(10),
    },
}))

export const Add = () => {

    const s = useStyles();

    return (
        <Container className={s.container}>

        </Container>
    );
}