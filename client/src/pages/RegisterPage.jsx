import React from 'react'
import Layout from '../components/Layout'
import { Box, Typography } from '@mui/material';
import Register from '../components/Register';

function RegisterPage() {
    return (
        <Layout>
            <Box display="flex">
                <Box marginTop="350px" width="75%" display="flex" flexDirection="column" alignItems="center">
                    <Typography color='primary' fontSize={ 50 }>pa · tri · ot</Typography>
                    <Typography color='primary' fontSize={ 30 }>[Pey - tree - uht n] -noun</Typography>
                    <Typography color='primary' fontSize={ 20 }>1. Values Pride in Self, Military and Country</Typography>
                    <Typography color='primary' fontSize={ 20 }>2. Knows and Celebrates the sacrifices</Typography>
                    <Typography color='primary' fontSize={ 20 }>made to Defend our Freedoms</Typography>
                    <Typography color='primary' fontSize={ 20 }>3. Someone who is committed to</Typography>
                    <Typography color='primary' fontSize={ 20 }>helping build a better tomorrow.</Typography>
                </Box>
                <Register />
            </Box>
        </Layout>
    )
}

export default RegisterPage