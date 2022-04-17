import { getUserData } from '../utils/utils.js'

export async function getAllCars(){
    
    const response = await fetch('http://localhost:3030/data/cars?sortBy=_createdOn%20desc');
    
    const result = await response.json();
    
    return result;
}

export async function addCar(car){
    
    const user = getUserData();

    const response = await fetch('http://localhost:3030/data/cars', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': user.accessToken
        },
        body: JSON.stringify(car)
    });

    const result = await response.json();

    return result;
} 