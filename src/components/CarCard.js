import { Link } from "react-router-dom";

function CarCard({ car }){

    return (
        <div className="listing">
            <div className="preview">
                <img src={ car.imageUrl } alt="car_image"/>
            </div>
            <h2>{car.brand} {car.model}</h2>
            <div className="info">
                <div className="data-info">
                    <h3>Year: {car.year}</h3>
                    <h3>Price: {car.price} $</h3>
                </div>
                <div className="data-buttons">
                    <Link to={`/details/${car._id}`} className="button-carDetails">Details</Link>
                </div>
        </div>
        </div>
    )
}

export default CarCard;