import { Link } from 'react-router-dom';
import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext.js';

function Header(){

    const { user } = useContext(AuthContext);

    const userNavigation = (
        <div id="profile">
            <Link to="/profile">Welcome {user.username}</Link>
            <Link to="/my-listings" >My Listings</Link>
            <Link to="/add-car" >Create Listing</Link>
            <Link to="/logout" >Logout</Link>
        </div>
    )

    const guestNavigation = (
        <div id="guest">
            <Link to="/login" >Login</Link>
            <Link to="/register" >Register</Link>
        </div>
    )

    return (
        <header>
            <nav>
                <Link to="/" className="active" >Home</Link>
                <Link to="/catalog" >All Listings</Link>
                <Link to="by-year" >By Year</Link>
                
                {user.username ? userNavigation : guestNavigation}
      
            </nav>
        </header>
    )
}

export default Header;