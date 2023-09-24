import axios from 'axios';

export default axios.create({
    baseURL:'https://miniature-system-7x4qvgjx555366j-3600.app.github.dev/',
    headers:{
        'Content-Type':'application/json',
    },
        withCredentials:false
})