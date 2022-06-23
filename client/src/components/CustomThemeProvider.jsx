import React from 'react';
import { createTheme, ThemeProvider } from "@mui/material";

const DarkOliveGreen = '#4e4016'
const Black = '#1C1B1F'

const Theme = createTheme({
    palette: {
        primary: {
        main: DarkOliveGreen,
        },
        secondary: {
        main: Black,
        },
    },

    typography: {
        fontSize: 15,
    },

    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                borderRadius: '25px',
                fontSize: '.75rem'
                }
            }
        }
    }
})

    const CustomThemeProvider = props => {
    const { children } = props

    return (
    <ThemeProvider theme={ Theme }>
        { children }
    </ThemeProvider>
    )
}

export default CustomThemeProvider