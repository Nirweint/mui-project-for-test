import {createTheme} from "@material-ui/core";
import {blue} from "@material-ui/core/colors";
import {Theme} from "@material-ui/core/styles/createTheme";


export const theme: Theme = createTheme({
    palette: {
        primary: {
            main: blue[500],
        },
    },
})