
import React, { useState } from 'react';
import apiClient from '../../api/apiclient'
import username from '../signingIn/signIn'

function Forum() {
    
    const [comment, inputComment] = useState ('')
    
    const onPost = (event) => {  
    event.preventDefault()
    apiClient.forum(comment) .then( (response) => {
        console.log(response)        
        
      })
    }


   /* apiClient.comment() .then((response) =>{
    document.getElementById("comment-section").innerHTML = response
    })*/
    
    apiClient.signIn(username) .then((response) =>{
        document.getElementById("comment-section").innerHTML = ("hi " + (username) )
        })
   
    
      
    return (
        <section class = "index-banner" >
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