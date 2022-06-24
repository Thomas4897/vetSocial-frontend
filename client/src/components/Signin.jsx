import React from 'react'
import { Link } from 'react-router-dom'
import { Box, TextField, Button } from '@mui/material';

function Signin() {
    return (
        <Box marginTop="160px" width="50%" display="flex" flexDirection="column">
            <Box p={ 4 }>
                <h1>Sign in</h1>
                <Box mb={ 3 }>
                    <TextField
                        id="email"
                        label="Email"
                        variant="standard"
                        // value={ signInForm.email }
                        // onChange={ e => setSignInForm({ ...signInForm, email: e.target.value }) }
                    />
                </Box>
                <Box mb={ 3 }>
                    <TextField
                        id="password"
                        type="password"
                        label="Password"
                        variant="standard"
                        // value={ signInForm.password }
                        // onChange={ e => setSignInForm({ ...signInForm, password: e.target.value }) }
                    />
                </Box>
                <Button variant="contained">Sign in</Button>
                <h5>Don't Have an account?</h5>
                <Link style={{ textDecoration: "none" }} to="register"><Button variant="contained">Registe Here</Button></Link>
            </Box>
        </Box>
    )
}

export default Signin
