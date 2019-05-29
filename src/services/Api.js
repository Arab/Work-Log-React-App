import axios from 'axios';
import ApiAdress from '../const/const'


export default axios.create({
    baseURL: ApiAdress(),
    timeout: 1000,
    headers: {'Content-type': 'application/json'}
})