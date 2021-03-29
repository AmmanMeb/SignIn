import apiClient from '../../api/apiclient'
import React, { useState } from 'react';
import {Link} from "react-router-dom";
import {Redirect} from 'react-router-dom';
import { Grid, Button, TextField } from "@material-ui/core"
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { FormControl } from '@material-ui/core';
import blue from '@material-ui/core/colors/blue';
import './signIn.css'

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Arial'
    ].join(','),
  },
  palette: {
    primary: blue,
  },
});

function SignIn() {
        
    const [username, getUser] = useState ('')
    const [password, getPass] = useState ('')

const onSubmit = (event) => {
  event.preventDefault()
  apiClient.signIn(username, password).then((response) => {
    console.log(response)  
    if (response === 'Logged In') {
      return <Redirect to='/forum' />
      
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
    <ThemeProvider theme={theme}>
      <Grid container style = {{minHeight: '100vh'}} spacing={0}  direction="column"  alignItems="center">
        <Grid item xs={12} sm={12}>
        
          <div className = "title-2">Sign In</div>
          <div>
            <FormControl margin = "normal">
              <TextField label="Username" value = {username} onChange={e => { getUser(e.target.value) }} spacing={4} />    
              <TextField label="Password" value = {password} onChange={e => { getPass(e.target.value) }} spacing={4}/>
              
            </FormControl>
          </div>                 
          <Grid item xs={12} sm={12}>
            <Button onClick={onSubmit} variant="contained" component="span" spacing={4} color = "secondary">
              Sign In
            </Button>
          </Grid> 
          <Grid item xs={12} sm={12}>
            <Button component = {Link} to = "/" spacing={4} color = "primary">
              Create Account
            </Button>
            <div id="error"></div>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>      
  </section>         
) 
     
}
  export default SignIn;
  
     
