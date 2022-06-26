import React from 'react'
import { AppBar, Box, Toolbar, Typography } from '@mui/material'

function Header() {
    return (
        <Box marginBottom="25px" sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography color="secondary" variant="h6" component="div" sx={{ flexGrow: 1 }}>VetSocial</Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header