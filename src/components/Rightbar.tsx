import React from 'react';
import {Avatar, Container, ImageList, ImageListItem, makeStyles, Typography} from "@material-ui/core";
import AvatarGroup from '@material-ui/lab/AvatarGroup';

const useStyles = makeStyles(theme => ({
    container: {
        paddingTop: theme.spacing(10),
    },
    title: {
        fontSize: 16,
        fontWeight: 500,
        color: '#555',
    },
    imageList: {},
}))

export const Rightbar = () => {

    const s = useStyles();

    return (
        <Container className={s.container}>
            <Typography className={s.title}>Online Friends</Typography>
            <AvatarGroup max={4} style={{marginBottom: 20}}>
                <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg"/>
                <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg"/>
                <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg"/>
                <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/4.jpg"/>
                <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/5.jpg"/>
            </AvatarGroup>
            <Typography className={s.title}>Gallery</Typography>
            <ImageList rowHeight={180} className={s.imageList} cols={2}>
                <ImageListItem>
                    <img
                        src={'https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270'}
                        alt={'image'}/>
                </ImageListItem>
                <ImageListItem>
                    <img
                        src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPS9FXXxCW5RsUW2mpSC2N6N96MzoqNcHFGQ&usqp=CAU'}
                        alt={'image'}/>
                </ImageListItem>
                <ImageListItem>
                    <img
                        src={'https://images.ctfassets.net/hrltx12pl8hq/61DiwECVps74bWazF88Cy9/2cc9411d050b8ca50530cf97b3e51c96/Image_Cover.jpg?fit=fill&w=480&h=270'}
                        alt={'image'}/>
                </ImageListItem>
                <ImageListItem>
                    <img
                        src={'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80'}
                        alt={'image'}/>
                </ImageListItem>
                <ImageListItem>
                    <img
                        src={'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'}
                        alt={'image'}/>
                </ImageListItem>
                <ImageListItem>
                    <img
                        src={'https://media.istockphoto.com/photos/tropical-and-palm-leaves-in-vibrant-gradient-holographic-colors-art-picture-id1148759102?k=20&m=1148759102&s=170667a&w=0&h=CIPjbLyw6ApYml8RLr7lZKi6QV8QNVzvzL0IltrxyzY='}
                        alt={'image'}/>
                </ImageListItem>
            </ImageList>
        </Container>
    );
}