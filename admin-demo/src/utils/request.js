import axios from 'axios'


const request = axios.create({
    baseURL: 'http://aionline.aishaonian.com'
})


export default request