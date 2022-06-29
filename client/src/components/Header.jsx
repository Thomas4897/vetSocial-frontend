import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, deleteUser } from '../redux/userSlice';
import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import ProfilePicture from '../images/default-profile-pic.jpeg'

function Header() {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSignout = () => {
        dispatch(deleteUser())
        window.localStorage.removeItem('applicationState')
        navigate("/")
    }

    return (
        <Box marginBottom="25px" sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography color="secondary" variant="h6" component="div" sx={{ flexGrow: 1 }}>VetSocial</Typography>
                        {
                            user
                            ? (
                            <>
                                <Box sx={{ width: 500, display: 'flex', justifyContent: 'space-around', marginRight: '375px' }}>
                                    <Box><Link to='/home'><HomeIcon color='secondary' /></Link></Box>
                                    <Box><Link to='/profile'><img style={{ width: '23px', heigth: '23px', borderRadius: '15px' }} src={ ProfilePicture } alt="profilePicture" /></Link></Box>
                                </Box>
                                <Box><Button onClick={ handleSignout } variant="contained" color="primary">Sign Out</Button></Box>
                            </>
                            )
                            : ("")
                        }
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header