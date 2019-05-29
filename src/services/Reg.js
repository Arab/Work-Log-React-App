import axios from 'axios';
import Api from '../services/Api';


axios.interceptors.response.use(response=>response.status,error=>{console.log(error.status)});

export const Reg = {
    Register({login, email, password}) {
        return Api.post('create_user.php', {login,email,password})
    }
}