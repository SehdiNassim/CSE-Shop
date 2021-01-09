import axios from "axios"
import config from '../config'

const Api = axios.create(
    {
        baseURL:config.api_url,
        responseType:'json'
    }
)

export default Api