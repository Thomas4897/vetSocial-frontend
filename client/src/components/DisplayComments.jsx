import React from 'react'
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectClicked, selectClickedPostComments } from '../redux/userSlice';


function DisplayComments(props) {
    const { comments } = props
    const clicked = useSelector(selectClicked);
    const clickedPostComments = useSelector(selectClickedPostComments)
    
    return (
        <Box width={ 1 } display="flex" flexDirection="column">
            <div className='card'>
          
             {comments.map(comment => 
                    clicked && clickedPostComments === comment.post ? 
                    
                        <div key={ comment._id } className="card-body">
                            <img style={{ width: "50px", height: "50px", marginRight: "10px", marginLeft: "25px" }} src={ comment.commentOwner.profilePicture } alt="profilePicture" />
                            <h6 style={{ width: "125px" }}>{ comment.commentOwner.username } : </h6>
                            <p style={{ width: "98%", marginTop: "5px" }}>{ comment.comment }</p>
                        </div>
                    
                    : ''
                )} 
            </div>
        </Box>
    )
}

export default DisplayComments