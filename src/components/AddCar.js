import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext.js";
import { addCar } from "../services/carService.js";


function AddCar(){

    const { user } = useContext(AuthContext);

    const navigate = useNavigate();

    const onSubmitHandler = (e) => {
        e.preventDefault();

        const car = Object.fromEntries(new FormData(e.currentTarget));

        addCar(car)
            .then(res => {
                navigate('/catalog')
            })
    }

    return(
        <section id="create-listing">
            <div className="container">
                <form id="create-form" method="POST" onSubmit={onSubmitHandler}>
                    <h1>Create Car Listing</h1>
                    <p>Please fill in this form to create an listing.</p>
                    <hr />

                    <p>Car Brand</p>
                    <input type="text" placeholder="Enter Car Brand" name="brand" />

                    <p>Car Model</p>
                    <input type="text" placeholder="Enter Car Model" name="model" />

                    <p>Description</p>
                    <input type="text" placeholder="Enter Description" name="description" />

                    <p>Car Year</p>
                    <input type="number" placeholder="Enter Car Year" name="year" />

                    <p>Car Image</p>
                    <input type="text" placeholder="Enter Car Image" name="imageUrl" />

                    <p>Car Price</p>
                    <input type="number" placeholder="Enter Car Price" name="price" />

                    <hr />
                    <input type="submit" className="registerbtn" value="Create Listing" />
                </form>
            </div>
        </section>
    )
}

export default AddCar;