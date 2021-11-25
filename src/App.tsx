import React from 'react';
import {Button, ButtonGroup, Container, Grid, Menu, MenuItem, Paper, TextField} from "@material-ui/core";

function App() {

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const [value, setValue] = React.useState('Controlled');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    return (
        <div>
            <Container>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"

                >
                    <Grid
                        item
                        xs
                    >
                        <Paper>
                            <Grid
                                container
                                direction="column"
                            >
                                <Grid item>
                                    <ButtonGroup>
                                        <Button variant="outlined">Default</Button>
                                        <Button variant="outlined">Default</Button>
                                        <Button variant="outlined">Default</Button>
                                        <Button variant="outlined">Default</Button>
                                    </ButtonGroup>
                                    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                                        Open Menu
                                    </Button>
                                    <Menu
                                        id="simple-menu"
                                        anchorEl={anchorEl}
                                        keepMounted
                                        open={Boolean(anchorEl)}
                                        onClose={handleClose}
                                    >
                                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                                        <MenuItem onClick={handleClose}>My account</MenuItem>
                                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                                    </Menu>
                                </Grid>
                                <Grid item>
                                    <TextField
                                        style={{minHeight: 250}}
                                        id="filled-multiline-flexible"
                                        multiline
                                        maxRows={6}
                                        value={value}
                                        onChange={handleChange}
                                        variant="filled"
                                        fullWidth
                                    />
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>



                    <Grid item xs>
                        <Paper>
                            <Grid
                                container
                                direction="column"
                            >
                                <Grid item>
                                    <ButtonGroup>
                                        <Button variant="outlined">Default</Button>
                                        <Button variant="outlined">Default</Button>
                                        <Button variant="outlined">Default</Button>
                                        <Button variant="outlined">Default</Button>
                                    </ButtonGroup>
                                    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                                        Open Menu
                                    </Button>
                                    <Menu
                                        id="simple-menu"
                                        anchorEl={anchorEl}
                                        keepMounted
                                        open={Boolean(anchorEl)}
                                        onClose={handleClose}
                                    >
                                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                                        <MenuItem onClick={handleClose}>My account</MenuItem>
                                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                                    </Menu>
                                </Grid>
                                <Grid item>
                                    <TextField
                                        style={{minHeight: 250, height: 250}}
                                        id="filled-multiline-flexible"
                                        multiline
                                        maxRows={6}
                                        value={value}
                                        onChange={handleChange}
                                        variant="standard"
                                        fullWidth
                                        InputProps={{ disableUnderline: true }}
                                    />
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>

                </Grid>
            </Container>
        </div>
    );
}

export default App;
