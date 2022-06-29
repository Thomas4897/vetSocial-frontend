import React from 'react'
import { Box } from '@mui/material';
import ProfilePicture from '../images/default-profile-pic.jpeg'

function DisplayComments(props) {
    const { comments } = props

    return (
        <Box width={ 1 } display="flex" flexDirection="column">
            <div className='card'>
                {comments.map(comment => {
                    return (
                        <div key={ comment._id } className="card-body">
                            <img style={{ width: "50px", height: "50px", marginRight: "10px", marginLeft: "25px" }} src={ ProfilePicture } alt="profilePicture" />
                            <h6 style={{ width: "125px" }}>{ comment.commentOwner.username } : </h6>
                            <p style={{ width: "83.5%", marginTop: "5px" }}>{ comment.comment }</p>
                        </div>
                    )
                })}
            </div>
        </Box>
    )
}

export default DisplayComments