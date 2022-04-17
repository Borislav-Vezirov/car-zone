import { Link, useNavigate } from "react-router-dom";
import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext.js';

import { loginService } from '../services/authService.js'
import { setUserData } from "../utils/utils.js";


function Login(){

    const { onLogin } = useContext(AuthContext);
    
    const navigate = useNavigate();

    function onSubmitHandler(e){
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const username = formData.get('username');
        const password = formData.get('password');

        loginService(username, password)
            .then(authData => {
                onLogin(authData);
                setUserData(authData);
                navigate('/');
            })
            .catch(err => console.log(err))

    }

    return(
        <section id="login">
            <div className="container">
                <form id="login-form" onSubmit={onSubmitHandler} method="post">
                    <h1>Login</h1>
                    <p>Please enter your credentials.</p>
                    <hr />

                    <p>Username</p>
                    <input placeholder="Enter Username" name="username" type="text" />

                    <p>Password</p>
                    <input type="password" placeholder="Enter Password" name="password" />
                    <input type="submit" className="registerbtn" value="Login" />
                </form>
                <div className="signin">
                    <p>Dont have an account?
                        <Link to="/register">Sign up</Link>.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Login;