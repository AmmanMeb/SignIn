import apiClient from '../../api/apiclient'
import React, { useState } from 'react';
import {Link} from "react-router-dom";
import {Redirect} from 'react-router-dom';

function SignIn() {
        
    const [username, getUser] = useState ('')
    const [password, getPass] = useState ('')
    
    const onSubmit = (event) => {
     event.preventDefault()
      apiClient.signIn(username, password) .then( (response) => {
        console.log(response)

        if (response === 'Logged In') {          
        return <Redirect to='/forum' />
      }
       else {
         return window.alert("Wrong Password man")
       }
      })

      .catch(error => {
        console.log('Error found when creating meeting');
      })

      
    }
    
       
         return (
           <section class="index-banner">
             <div>Sign In</div>
             <div>
                 <label>username</label> 
                 <input  type="text" id="username" onChange = {e => {getUser(e.target.value)}}></input> 
               </div>
               <div>   
                 <label>password</label>
                 <input type="text" id="password" onChange = {e => {getPass(e.target.value)}}></input>
               </div>  
               <div>
                 <button onClick={onSubmit}>Sign In</button>
               </div> 
               <div>
               <Link to="/">
                   <button type="button">
                     Create Account
                   </button>
               </Link>
               </div>     
           </section>         
         )      
       
       
     }
     export default SignIn;