import axios from 'axios';
import {USER_LOGIN} from './type';


export const login = (username,password) => dispatch =>{
    axios({
        method: 'post',
        url: USER_LOGIN,
        data: {
          username: username,
          password:password 
        }
      }).then((res)=>{
        dispatch({
            type:'USER_LOGIN',
            payload:[res.data.key,res.status]
        })
      }).catch(err=>console.log(err));

}