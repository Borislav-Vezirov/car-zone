import { Link, useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext.js'
import { registerService } from "../services/authService.js";


function Register(){

    const { onLogin } = useContext(AuthContext);

    const navigate = useNavigate();

    const onRegisterHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const username = formData.get('username');
        const password = formData.get('password');
        const rePass   = formData.get('rePass');

        if(password !== rePass){
            throw new Error('Password\'s must match!')
        }
        
        registerService(username, password)
        .then(authData => {
            onLogin(authData);
            navigate('/');
        })
        .catch(err => console.log(err))
    }

    return(
        <section id="register" >
            <div className="container">
                <form id="register-form" onSubmit={onRegisterHandler} method="POST">
                    <h1>Register</h1>
                    <p>Please fill in this form to create an account.</p>
                    <hr />

                    <p>Username</p>
                    <input type="text" placeholder="Enter Username" name="username" required />

                    <p>Password</p>
                    <input type="password" placeholder="Enter Password" name="password" required />

                    <p>Repeat Password</p>
                    <input type="password" placeholder="Repeat Password" name="rePass" required />
                    <hr />

                    <input type="submit" className="registerbtn" value="Register" />
                </form>
                <div className="signin">
                    <p>Already have an account?
                        <Link to="/login">Sign in</Link>.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Register;