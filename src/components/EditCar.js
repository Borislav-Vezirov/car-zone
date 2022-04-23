import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editCar, getOneById } from "../services/carService.js";



function EditCar(){
;
    const navigate = useNavigate();

    const { carId } = useParams();

    const [ car, setCar ] = useState({});

    useEffect(() => {

        getOneById(carId)
            .then(res => {
                setCar(res)
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    async function onSubmitHandler(e){

        e.preventDefault()

        const formData = Object.fromEntries(new FormData(e.target));
        try {
            
            await editCar(carId,formData);
    
            navigate('/catalog');

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <section id="edit-listing">
            <div className="container">

                <form id="edit-form" method="POST" onSubmit={onSubmitHandler}>
                    <h1>Edit Car Listing</h1>
                    <p>Please fill in this form to edit an listing.</p>
                    <hr />

                    <p>Car Brand</p>
                    <input type="text" placeholder="Enter Car Brand" name="brand" defaultValue={car.brand} />

                    <p>Car Model</p>
                    <input type="text" placeholder="Enter Car Model" name="model" defaultValue={car.model} />

                    <p>Description</p>
                    <input type="text" placeholder="Enter Description" name="description" defaultValue={car.description} />

                    <p>Car Year</p>
                    <input type="number" placeholder="Enter Car Year" name="year" defaultValue={car.year} />

                    <p>Car Image</p>
                    <input type="text" placeholder="Enter Car Image" name="imageUrl" defaultValue={car.imageUrl} />

                    <p>Car Price</p>
                    <input type="number" placeholder="Enter Car Price" name="price" defaultValue={car.price} />

                    <hr />
                    <input type="submit" className="registerbtn" value="Edit Listing" />
                </form>
            </div>
        </section>
    )
}

export default EditCar;