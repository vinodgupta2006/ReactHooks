import axios from 'axios';

export const fetch = (object) =>{
    const baseUrl = 'api/';
    const http = axios({
        url: baseUrl + object.url,
        method: object.method || 'GET',
        headers: { 'Content-Type': 'application/json' },
        data: object.data,
    }).then( response => {
        return response;
    }).catch( error => {
        return error;
    });

    return http;
}