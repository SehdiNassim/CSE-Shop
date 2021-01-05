import axios from "axios"
import config from '../config'

console.log(process.env);
console.log(config.api_url);
const Api = axios.create(
    {
        baseURL:config.api_url,
        responseType:'json'
    }
)

export default Api