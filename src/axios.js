import axios from 'axios'

const instance = axios.create({
    baseURL: "https://tiktok-clone456.herokuapp.com"
})

export default instance;