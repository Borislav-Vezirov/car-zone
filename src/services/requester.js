
const host = 'http://localhost:3030/data';

export async function request(url, options){

    try {
        
        const response = await fetch(host + url, options);

        if(response.ok != true){
            const error = await response.json();
            throw new Error(error.message);
        }

        try {
            return await response.json();
        } catch (err) {
            return response;
        }
        

    } catch (err) {
        throw err;
    }
}

export function createOptions(method = 'get', data){

    const options = {
        method,
        headers: {}
    };

    if(data != undefined){
        
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    const userData = JSON.parse(localStorage.getItem('user'));

    if(userData != undefined){
        options.headers['X-Authorization'] = userData.accessToken;
    }

    return options;
}
//------------------------------------------------------------------------------------------------------------
export async function get(url){

    return request(url);
}

export async function post(url, data){

    return request(url, createOptions('post', data));
}

export async function put(url, data){

    return request(url, createOptions('put', data));
}

export async function del(url){

    return request(url, createOptions('delete'))
}