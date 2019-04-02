import * as axios from 'axios';

const ResponderAxiosInstance = axios.create({
    timeout: 20000,
    headers: {'content-Type': 'application/json'}
});


export function fetchDrivers(){

    const request_data = {
        url: 'https://next.json-generator.com/api/json/get/VkBgqi5dI',
        method: 'GET'
    };
    return ResponderAxiosInstance.get(request_data.url).then(res=>res.data).catch((err) => console.log(err));
}

export function fetchTasks(){

    const request_data = {
        url: `https://next.json-generator.com/api/json/get/Vkvze2qO8`,
        method: 'GET'
    };

    return ResponderAxiosInstance.get(request_data.url).then(res=>res.data).catch((err) => console.log(err));
}
