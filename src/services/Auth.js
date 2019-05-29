import axios from 'axios';
import Api from '../services/Api';

axios.interceptors.response.use(response=>response,error=>error.status===401?Auth.logout():null);

export const Auth = {
    authenticated() {
        return localStorage.getItem('token')
    },
    login({login, password}) {
        return Api.post('login.php', {login, password})
        .then(response=>{
            let {jwt, user} = response.data;
            localStorage.setItem('profile', JSON.stringify(user));
            localStorage.setItem('token', jwt);
            axios.interceptors.request.use(config=> {
                config.headers['authorization'] = `Bearer ${jwt}`;
                return config;
            });
        });
    },
    logout(){
        localStorage.removeItem('profile');
        localStorage.removeItem('token');
        axios.interceptors.request.use(config => {
            delete config.headers['authorization'];
            return config;
        })
    },
}