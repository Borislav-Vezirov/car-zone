import { Link, useNavigate } from "react-router-dom";
import { login } from '../services/authService.js'


function Login({ onLogin }){

    const navigate = useNavigate();

    function onSubmitHandler(e){
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const username = formData.get('username');
        const password = formData.get('password');

        login(username, password)
            .then(authData => {
                onLogin(authData);
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