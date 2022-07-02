import { useSelector } from 'react-redux';
import { selectUser } from '../redux/userSlice';
import CreateComment from './CreateComment';
import DisplayComments from './DisplayComments';
import { Box } from '@mui/material';
import { useState } from 'react';

function DisplayPosts() {
    const user = useSelector(selectUser)
    const [clickedPostComments, setClickedPostComment] = useState("");

    return (
        <Box width={ 1 } display="flex" flexDirection="column" alignItems="center">

            {user.postHistory.map(post => {
                const comments = post.commentHistory
                return (
                    <div key={ post._id } style={{ width: "50%", marginBottom: "15px" }} className='card'>
                        <div className="card-body">
                            <img style={{ width: "50px", height: "50px", marginRight: "10px" }} src={ user.profilePicture } alt="profilePicture" />
                            <h6 style={{ width: "125px" }}>{ post.postOwner.username } : </h6>
                            <p style={{ width: "70%", marginRight: "25px", marginTop: "5px" }}>{ post.post }</p>
                        </div> 
                        {comments.length > 0 ? <DisplayComments postId={ post._id } comments={ comments } clickedPostComments={clickedPostComments}/> : ""}
                        <CreateComment comments={ comments } postId={ post._id } setClickedPostComment={setClickedPostComment} clickedPostComments={clickedPostComments} />
                        
                    </div>
                )
            })}
        </Box>
    )
}

export default DisplayPosts