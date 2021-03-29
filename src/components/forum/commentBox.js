import React, { useState } from 'react';
import apiClient from '../../api/apiclient'

function Comment() {
    const [postedComment, setPostedComment] = useState ('')

    const insertComments = (event) => {
        event.preventDefault()
        apiClient.comment() .then( (response) => {
            setPostedComment(response.data)
        })
    }
    return (
        <section class = "comment-box">
            <div>{postedComment}</div>
            <button onClick = {insertComments}>INSERT</button>
        </section>
    ) 
    
}
export default Comment;