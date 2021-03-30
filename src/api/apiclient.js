import axios from 'axios'


//communicates with the Backend
export default class apiClient {
    static async signUp(user, pass) {
        const response =  await  axios
        .post('http://localhost:8080/signUp', {
          username: user,
          password: pass
        })
        return  response.data;
    }

    static async signIn(user, pass){    
     const response = await axios    
       .post('http://localhost:8080/signIn', {
          username: user,
          password: pass,
       }) 
       .then ()
         return response.data;   
    }

  
    
}