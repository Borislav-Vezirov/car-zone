
export async function getAllCars(){

    const response = await fetch('http://localhost:3030/data/cars?sortBy=_createdOn%20desc');

    const result = await response.json();

    return result;
}