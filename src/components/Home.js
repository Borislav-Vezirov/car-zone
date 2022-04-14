import { Link } from "react-router-dom";

function Home(){
    return (
        <section id="main">
            <div id="welcome-container">
                <h1>Welcome To The Car Zone</h1>
                <img class="hero" src="/images/car-png.webp" alt="carIntro" />
                <h2>To see all the listings click the link below:</h2>
                <div>
                    <Link to="/catalog" class="button">Listings</Link>
                </div>
            </div>
        </section>
    )
}

export default Home;