import axios from 'axios'
import { response } from 'express';
//communicates with the Backend
export default class apiClient {
    static signUp(user, pass){
    console.log (user)
    console.log (pass)
   
    axios
    .post('http://localhost:8080/signUp', {
        username: user,
        password: pass,
    })
    
    .then (res => {
        return res.data;
    })
    .catch (error => {
        console.error(error);
    })
    
    }

    static async signIn(user, pass){
    
    const response = await axios
    
    .get('http://localhost:8080/signIn', {
        username: user,
        password: pass,
    }) 
    return response.data;   
         
    }

    static forum(comm){        
    console.log (comm);
    axios
    .post('http://localhost:8080/forum', {
        comment: comm,
    })    
    .then (res => {
        return res.data;
    })
    .catch (error => {
        console.error();
    })
        
    }

    static getting(ipt){
        console.log (ipt);
        axios
        .get('http://localhost:8080/forum', {
            input: ipt,
        })
        .then (res => {
            return res.data;
        })
        .catch (error => {
            console.error();
        })    
    }
    
}