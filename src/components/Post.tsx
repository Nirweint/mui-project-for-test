import React from 'react';
import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    makeStyles,
    Typography
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 500,
        marginBottom: theme.spacing(2)
    },
    media: {
        height: 140,
    },
}))

export const Post = () => {

    const s = useStyles();

    return (
        <Card className={s.card}>
            <CardActionArea>
                <CardMedia
                    className={s.media}
                    image="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg"
                    title={"My Post"}
                />
                <CardContent>
                    <Typography variant={'h6'}>My First Post</Typography>
                    <Typography variant={'body1'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam,
                        aliquid architecto assumenda beatae distinctio doloribus eos facilis fuga inventore laboriosam
                        optio perspiciatis praesentium quas quo, quod quos similique voluptates.</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button color={'primary'}>Share</Button>
                <Button color={'primary'}>Learn More</Button>
            </CardActions>
        </Card>
    );
}