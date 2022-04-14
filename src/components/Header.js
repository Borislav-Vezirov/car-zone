import { Link } from 'react-router-dom';

function Header() {

    return (
        <header>
            <nav>
                <Link to="/" className="active" >Home</Link>
                <Link to="/catalog" >All Listings</Link>
                <Link to="by-year" >By Year</Link>
                
                <div id="guest">
                    <Link to="/login" >Login</Link>
                    <Link to="/register" >Register</Link>
                </div>
                
                <div id="profile">
                    <Link to="/profile">Welcome username</Link>
                    <Link to="/my-listings" >My Listings</Link>
                    <Link to="/add-car" >Create Listing</Link>
                    <Link to="/logout" >Logout</Link>
                </div>
            </nav>
        </header>
    )
}

export default Header;