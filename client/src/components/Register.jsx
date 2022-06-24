import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { Box, TextField, Button } from '@mui/material';

const URL = 'http://localhost:3001'

function Register() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [username, setUsername] = useState("")
    const [address, setAddress] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleRegister = async () => {
        const newBody = {
            firstName: firstName,
            lastName: lastName,
            username: username,
            address: address,
            email: email,
            password: password
        }
        const fetchedData = await fetch(`${URL}/users/create-user`, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newBody)
        })
        const parsedData = await fetchedData.json()
        navigate("/")
        return parsedData
    }

    return (
        <Box marginTop="160px" width="50%" display="flex" flexDirection="column">
            <Box p={ 4 }>
                <h1>Register</h1>
                <Box mb={ 3 }>
                    <Box mb={ 3 }>
                        <TextField
                            id="firstName"
                            type="text"
                            label="First Name"
                            variant="standard"
                            value={ firstName }
                            onChange={ e => setFirstName(e.target.value) }
                        />
                        <TextField
                        id="lastName"
                        type="text"
                        label="LastName"
                        variant="standard"
                        value={ lastName }
                        onChange={ e => setLastName(e.target.value) }
                        />
                    </Box>
                    <Box mb={ 3 }>
                        <TextField
                            id="address"
                            type="text"
                            label="Address"
                            variant="standard"
                            value={ address }
                            onChange={ e => setAddress(e.target.value) }
                        />
                    </Box>
                    <Box mb={ 3 }>
                        <TextField
                            id="username"
                            type="text"
                            label="Username"
                            variant="standard"
                            value={ username }
                            onChange={ e => setUsername(e.target.value) }
                        />
                    </Box>
                    <TextField
                        id="email"
                        type="email"
                        label="Email"
                        variant="standard"
                        value={ email }
                        onChange={ e => setEmail(e.target.value) }
                    />
                </Box>
                <Box mb={ 3 }>
                    <TextField
                        id="password"
                        type="password"
                        label="Password"
                        variant="standard"
                        value={ password }
                        onChange={ e => setPassword(e.target.value) }
                    />
                </Box>
                <Button onClick={ handleRegister } variant="contained">Submit</Button>
                <h5>Already have an account?</h5>
                <Link style={{ textDecoration: "none" }} to="/"><Button variant="contained">Login Here</Button></Link>
            </Box>
        </Box>
    )
}

export default Register
