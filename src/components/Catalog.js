import { useEffect, useState } from "react";
import { getAllCars } from "../services/carService.js";
import CarCard from "./CarCard.js";


function Catalog() {

    let [cars, setCars] = useState([]);
    // let [loading, setLoading] = useState(false);

    console.log(cars);
 
    useEffect(() => {
        // setLoading = true;
        getAllCars()
            .then(result => {
                console.log(result);
                // setLoading = false;
                setCars(result);
            })
    }, []);

    return (
        <section id="car-listings">
            <h1>Car Listings</h1>
            <div class="listings">
                { cars.length > 0
                        ? cars.map(x => < CarCard key={x._id} car={x} />)
                        : <p class="no-cars">No cars in database.</p>
                }
            </div>
        </section>

    )
}


export default Catalog;