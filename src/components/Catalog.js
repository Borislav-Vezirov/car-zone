import { useEffect, useState } from "react";
import { getAllCars } from "../services/carService.js";
import CarCard from "./CarCard.js";


function Catalog() {

    let [cars, setCars] = useState([]);
    // let [loading, setLoading] = useState(false);
 
    useEffect(() => {
        // setLoading = true;
        getAllCars()
            .then(result => {
                // setLoading = false;
                setCars(result);
            })
    }, []);

    return (
        <section id="car-listings">
            <h1>Car Listings</h1>
            <div className="listings">
                { cars.length > 0
                        ? cars.map(x => < CarCard key={x._id} car={x} />)
                        : <p className="no-cars">No cars in database.</p>
                }
            </div>
        </section>

    )
}


export default Catalog;