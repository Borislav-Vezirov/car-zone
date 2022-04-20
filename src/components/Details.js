import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext.js";
import { getOneById } from "../services/carService.js";


function Details(){

    const { user } = useContext(AuthContext);

    const { carId } = useParams();

    const navigate = useNavigate();

    const [car, setCar] = useState({});

    useEffect(() => {

        getOneById(carId)
            .then(res => {
                setCar(res);
            })
    }, []);

    console.log('dsfgsdfgdsfgsdgb ' + user._id);
    const ownerButtons = (
        <div className="listings-buttons">
            <Link to={`/edit/${car._id}`} className="button-list">Edit</Link>
            <a href="#" className="button-list">Delete</a>
        </div>
    )

    return(
        <section id="listing-details">
            <h1>Details</h1>
            <div className="details-info">
                <img src={car.imageUrl} alt="car_image" />
                <hr />
                <ul className="listing-props">
                    <li><span>Brand:</span>{car.brand}</li>
                    <li><span>Model:</span>{car.model}</li>
                    <li><span>Year:</span>{car.year}</li>
                    <li><span>Price:</span>{car.price}$</li>
                </ul>
                {user._id == car._ownerId ? ownerButtons : null}

                <p className="description-para">{car.description}</p>

            </div>
        </section>
    )
}

export default Details;