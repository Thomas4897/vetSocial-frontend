import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/userSlice';
import CreateComment from './CreateComment';
import DisplayComments from './DisplayComments';
import { Box } from '@mui/material';
import ProfilePicture from '../images/default-profile-pic.jpeg'

function DisplayPosts() {
    const user = useSelector(selectUser)
    console.log('user', user);

    return (
        <Box width={ 1 } display="flex" flexDirection="column" alignItems="center">
            {user.postHistory.map(post => {
                // console.log('post: ', post)
                // console.log('commentHistory: ', post.commentHistory);
                const comments = post.commentHistory;
                console.log('comments: ', comments);
                return (
                    <div key={ post._id } style={{ width: "50%", marginBottom: "15px" }} className='card'>
                        <div className="card-body">
                            <img style={{ width: "50px", height: "50px", marginRight: "10px" }} src={ ProfilePicture } alt="profilePicture" />
                            <h6 style={{ width: "125px" }}>{ post.postOwner.username } : </h6>
                            <p style={{ width: "83.5%", marginRight: "25px", marginTop: "5px" }}>{ post.post }</p>
                        </div> 
                        {
                            post.commentHistory.length > 0
                            ? <DisplayComments comments={ comments } />
                            : ""
                        }
                        <CreateComment postId={ post._id } />
                    </div>
                )
            })}
        </Box>
    )
}

export default DisplayPosts