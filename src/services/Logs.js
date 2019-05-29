import axios from 'axios';
import Api from '../services/Api';

axios.interceptors.response.use(response=>response,error=>error);

export const Logs = {
    create_log({start,stop, jwt}) {
        return Api.post('create_log.php', {start,stop,jwt})
        .then(response => console.log(response.data.message))
        .catch(error => console.log('Auth failed: ' + error.message))
        
    },
    show_logs_page({limit,offset,jwt}) {
        return Api.post('show_logs_page.php', {limit,offset,jwt})
    }
}