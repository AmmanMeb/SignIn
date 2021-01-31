import React, { useState } from 'react';
import './main.css';
import apiClient from '../../api/apiclient'


 
 
function Account() {
   
 const [username, setUser] = useState ('')
 const [password, setPass] = useState ('')
 
 const onSubmit = (event) => {
  event.preventDefault()
   apiClient.signUp(username, password) .then((response) => {
   console.log(response)
   if (response === 'Failed to Add') {
     return console.log ("no account")
   }
   if (response === "Account Created") {
    return console.log ("logged in")
  }
   })
   
 }
 
    
      return (
        <section class="index-banner">
          <div>Create Account</div>
          <div>
              <label>username</label> 
              <input  type="text" name="username" onChange = {e => {setUser(e.target.value)}}></input> 
            </div>
            <div>   
              <label>password</label>
              <input type="text" name="password" onChange = {e => {setPass(e.target.value)}}></input>
            </div>  
            <div>
              
                <button onClick={onSubmit}>submit</button>
              
            </div>      
        </section>         
      )      
    
    
  }

  
  export default Account;