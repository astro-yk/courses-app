import { createTheme } from "@mui/material"

const theme = createTheme({
    palette: {
        text: {
            primary: "#FFFFFF", //gray
            secondary: "#FFFFFF" // white
        },
        primary: {
            main: "#019a95", //cyans
            light: "#64cbc7" 
        },
        secondary: {
            main: "#fa7e1c" // orange
        },
        info: {
            main: "#cbe9e7"
        }, 
        background: {
            default: "#f5f5f5" // light gray
        }
    }, 
})

export default theme;