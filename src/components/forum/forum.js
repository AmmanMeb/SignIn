import React, { useState } from 'react';
import apiClient from '../../api/apiclient'

function Forum() {
    
   
    
   


    const [comment, inputComment] = useState ('')
    
    const onPost = (event) => {  
        event.preventDefault()
        const response = apiClient.forum(comment)
        console.log(response)           
        insertComments()
    }
    
 const insertComments = () => {
    const input = (document.getElementById('comment-section').innerHTML = 'hold')
    const insert = apiClient.getting(input)

    
}

    return (
        <section class = "index-banner" onLoad = {insertComments}>
            <div>
                <label>Comment</label>
                <textarea name="comment" id= "comment" rows="10" tabIndex = "4"onChange = {e => {inputComment(e.target.value)}}></textarea>
                <button onClick={onPost}>Post</button>
            </div>
            <div>
                <body id = "comment-section" ></body>
            </div>
        </section>
    )

    
}
export default Forum;