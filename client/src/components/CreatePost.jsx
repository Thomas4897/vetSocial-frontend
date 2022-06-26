import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/userSlice';
import { Box, Button } from '@mui/material';
import ProfilePicture from '../images/default-profile-pic.jpeg'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const URL = 'http://localhost:3001'

function CreatePost() {
    const [post, setPost] = useState("")
    const user = useSelector(selectUser)

    const handleCreatePost = async () => {
        const newBody = {
            post: post,
            postOwner: user._id
        }
        const fetchedData = await fetch(`${URL}/posts/create-post/${user._id}`, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newBody)
        })
        const parsedData = await fetchedData.json()
        setPost("")
        return parsedData
    }

    return (
        <Box width={ 1 } display="flex" flexDirection="column" alignItems="center">
            <div style={{ width: "50%" }} className='card'>
                <div className="card-body">
                    <img style={{ width: "50px", height: "50px", marginRight: "25px" }} src={ ProfilePicture } alt="profilePicture" />
                    <input value={ post } onChange={ e => setPost(e.target.value) } style={{ width: "70%", marginRight: "25px" }} placeholder={`  What's on your mind, ${ user.firstName }?`} type="text" name="" id="" />
                    <Button onClick={ handleCreatePost } variant="contained">Post</Button>
                </div>
            </div>
        </Box>
    )
}

export default CreatePost
