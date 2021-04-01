import apiClient from '../../api/apiclient'
import React, { useState } from 'react';
import {Link} from "react-router-dom";
import './signIn.css'






function SignIn() {
        
    const [username, getUser] = useState ('')
    const [password, getPass] = useState ('')

const onSubmit = (event) => {
  event.preventDefault()
  apiClient.signIn(username, password).then((response) => {
    console.log(response)  
    if (response === 'Logged In') {    
       return console.log('yay');
    }

    else {
      document.getElementById('error').innerHTML = ("Wrong Username or Password");
    }
  }).catch(error => {
    console.log('Error found when creating meeting');
  })
}



return (
    <section class="index-banner">
      <div class = "box">
      <div className = "title">Sign In</div>
      <div  class="field">
          <label for="fullname">Username</label> 
          <input   type="text" id="username" onChange = {e => {getUser(e.target.value)}}></input> 
        </div>
        <div class="field">   
          <label for="fullname">Password</label>
          <input   type="text" id="password"onChange = {e => {getPass(e.target.value)}}></input>
        </div>  
        <div>
          <button class="button-1" onClick={onSubmit}>Sign In</button>
        </div> 
        <div>
        <Link to="/">
            <button type="button" class="button-2" >
              Create Account
            </button>
        </Link>
        </div>
        </div>     
    </section>         
  )      

     
}
  export default SignIn;
  
     
