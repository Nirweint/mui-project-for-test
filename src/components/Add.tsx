import React, {useState} from 'react';
import {
    Button,
    Container,
    Fab,
    FormControlLabel, FormLabel,
    makeStyles,
    MenuItem,
    Modal, Radio,
    RadioGroup, Snackbar,
    TextField,
    Tooltip
} from "@material-ui/core";
import {VariantType, useSnackbar} from 'notistack';
import {Add as AddIcon} from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
    container: {
        width: 500,
        height: 550,
        backgroundColor: '#fff',
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        margin: 'auto',
        [theme.breakpoints.down('sm')]: {
            width: '100vw',
            height: '100vh',
        }
    },
    fab: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(3),
    },
    form: {
        padding: theme.spacing(2),
    },
    item: {
        marginBottom: theme.spacing(3),
    },
}))

export const Add = () => {

    const s = useStyles();
    const { enqueueSnackbar } = useSnackbar();
    const [open, setOpen] = useState<boolean>(false)

    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false);
    };
    const handleClickVariant = (variant: VariantType) => () => {
        // variant could be success, error, warning, info, or default
        enqueueSnackbar('This is a success message!', { variant });
    };


    return (
        <>
            <Tooltip title="Add" aria-label="add" onClick={handleOpen}>
                <Fab color="primary" className={s.fab}>
                    <AddIcon/>
                </Fab>
            </Tooltip>

            <Modal open={open} onClose={handleClose}>
                <Container className={s.container}>
                    <form className={s.form} autoComplete={'off'}>
                        <div className={s.item}>
                            <TextField id={"title"} label={'Title'} size={'small'} style={{width: "100%"}}/>
                        </div>
                        <div className={s.item}>
                            <TextField
                                multiline
                                rows={4}
                                variant="outlined"
                                id={"description"}
                                label={'Description'}
                                size={'small'}
                                style={{width: "100%"}}
                            />
                        </div>
                        <div className={s.item}>
                            <TextField select label={'Visibility'} value={"Public"}>
                                <MenuItem value={'Public'}>
                                    Public
                                </MenuItem>
                                <MenuItem value={'Private'}>
                                    Private
                                </MenuItem>
                                <MenuItem value={'Unlisted'}>
                                    Unlisted
                                </MenuItem>
                            </TextField>
                        </div>
                        <div className={s.item}>
                            <FormLabel component="legend">Who can comment?</FormLabel>
                            <RadioGroup>
                                <FormControlLabel value="Everybody" control={<Radio size={'small'} />} label="Everybody" />
                                <FormControlLabel value="Friends" control={<Radio size={'small'} />} label="Friends" />
                                <FormControlLabel value="Nobody" control={<Radio size={'small'} />} label="Nobody" />
                            </RadioGroup>
                        </div>
                        <div className={s.item}>
                            <Button
                                variant={'outlined'}
                                color={'primary'}
                                style={{marginRight: 20}}
                                onClick={handleClickVariant("success")}
                            >Create
                            </Button>
                            <Button variant={'outlined'} color={'secondary'} onClick={handleClose}>Cancel</Button>
                        </div>
                    </form>
                </Container>
            </Modal>
        </>
    );
}