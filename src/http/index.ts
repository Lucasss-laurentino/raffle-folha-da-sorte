import axios from 'axios'

export const http = axios.create({
    
    baseURL: 'http://localhost:8000/',
    headers: {
        Accept: 'application/json',
        Content: 'application/json', 
    }

});

http.interceptors.request.use(function (config) {

    const token = localStorage.getItem('token')

    if(token && config.headers){

        config.headers.Authorization = token

    }

    return config;

}, function (error) {

    return Promise.reject(error);

});