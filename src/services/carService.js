import { del, get, post, put } from "./requester.js";



export async function getAllCars(){

    return get('/cars?sortBy=_createdOn%20desc');

    // const response = await fetch('http://localhost:3030/data/cars?sortBy=_createdOn%20desc');
    
    // const result = await response.json();
    
    // return result;
}

export async function getOneById(id){

    return get(`/cars/${id}`)

    // const response = await fetch(`http://localhost:3030/data/cars/${id}`);

    // const car = await response.json();

    // return car;
}

export async function addCar(car){

    return post(`/cars`, car);
    
    // const user = JSON.parse(localStorage.getItem('user'));

    // const response = await fetch('http://localhost:3030/data/cars', {
    //     method: 'POST',
    //     headers: {
    //         'content-type': 'application/json',
    //         'X-Authorization': user.accessToken
    //     },
    //     body: JSON.stringify(car)
    // });

    // const result = await response.json();

    // return result;
} 

export async function removeCar(id){

    return del(`/cars/${id}`);

    // const user = JSON.parse(localStorage.getItem('user'));

    // await fetch(`http://localhost:3030/data/cars/${id}`, {
    //     method: 'DELETE',
    //     headers: {
    //         'X-Authorization': user.accessToken
    //     },
    // });
}

export async function editCar(id, car){

    return put(`/cars/${id}`, car)
    
    // const user = JSON.parse(localStorage.getItem('user'));

    // const response = await fetch(`http://localhost:3030/data/cars/${id}`, {
    //     method: 'PUT',
    //     headers: {
    //         'content-type': 'application/json',
    //         'X-Authorization': user.accessToken
    //     },
    //     body: JSON.stringify(car)
    // });

    // const result = await response.json();

    // return result;
} 