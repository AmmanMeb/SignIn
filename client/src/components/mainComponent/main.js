import React, { useState } from 'react';
import { Redirect } from "react-router-dom"
import './main.css';
import apiClient from '../../api/apiclient'



 
function Account() {

 const [username, setUser] = useState ('')
 const [password, setPass] = useState ('')
 const [doRedirect, setDoRedirect] = useState(false);
 
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
         return setDoRedirect(true);
        }
     })
       .catch(error => {
        console.log('Error found when creating meeting');
    })
 }
 if (doRedirect) return <Redirect to="/SignIn"/>;
    
      return (
        <section class="index-banner-2">
          <div className= "bg"></div>
          <div className= "float">
            <div className= "type">
              <div className="title-2">Create Account</div>
            <div>
              <label>username </label> 
              <input  type="text" name="username" onChange = {e => {setUser(e.target.value)}}></input> 
            </div>
            <div>   
              <label>password </label>
              <input type="text" name="password" onChange = {e => {setPass(e.target.value)}}></input>
            </div>
            <div id="error" className = "error-2"> </div>
            <div>

                <button class="button-3" onClick={onSubmit}>Submit</button>
            </div>
              </div>
          </div>
        </section>         
      )      

    
    
  }

  
  export default Account;