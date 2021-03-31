import React, { useState } from 'react';
import './main.css';
import apiClient from '../../api/apiclient'



 
function Account() {
   
 const [username, setUser] = useState ('')
 const [password, setPass] = useState ('')
 
 const onSubmit = (event) => {
  event.preventDefault()
  
  if (username.length < 1) {
   return document.getElementById('error').innerHTML = ("Please enter a Password or Username");
  }
  if (password.length < 1) {
    return  document.getElementById('error').innerHTML = ("Please enter a Password or Username");
  }
   apiClient.signUp(username, password) .then((response) => {
   console.log(response)
   if (response === 'Account Created') {
     return console.log ("logged in")
   }
  
   })
   
 }
 
    
      return (
        <section class="index-banner-2">
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