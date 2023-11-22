import axios from 'axios';
import Config from "./Config";

class AuthHandler{
    static login(username,password,callback){
      axios.post(Config.loginUrl,{username:username,password:password})
      .then(function(response){
        console.log(response);
      })
      .catch(function(error){
        console.log(error.response);
      })
    }
}
export default AuthHandler;