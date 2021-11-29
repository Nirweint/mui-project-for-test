import React from 'react';
import {Container, makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    container: {
        paddingBottom: theme.spacing(2),
    },
}))

export const Post = () => {

    const s = useStyles();

    return (
        <Container className={s.container}>
            Helllooodsodosdosod
        </Container>
    );
}