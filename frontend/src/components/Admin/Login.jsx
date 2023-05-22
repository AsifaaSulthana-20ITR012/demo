import { useNavigate } from 'react-router-dom';
import { useState, useEffect, React } from "react";
import axios from 'axios';
import img1 from "../../images/login.jpg";
import './login.css'
function Login() {
    // React States
    const [errorMessages, setErrorMessages] = useState({});
    const [data, setData] = useState([]);
    const [isSubmitted, setIsSubmitted] = useState(false);
    useEffect(() => {
        axios
            .get("https://sanjays-fine-foods.onrender.com/fetchUser")
            .then((res) => setData(res.data))
            .catch((err) => console.log(err, "it has an error"));
    });
    // User Login info
    const navigate = useNavigate();

    const errors = {
        uname: "invalid username",
        pass: "invalid password"
    };

    const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();

        var { uname, pass } = document.forms[0];

        // Find user login info
        const userData = data.find((user) => user.uname === uname.value);

        // Compare user info
        if (userData) {
            if (userData.password !== pass.value) {
                // Invalid password
                setErrorMessages({ name: "pass", message: errors.pass });
            } else {
                setIsSubmitted(true);
            }
        } else {
            // Username not found
            setErrorMessages({ name: "uname", message: errors.uname });
        }
    };

    // Generate JSX code for error message
    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );

    // JSX code for login form
    const renderForm = (
        <div className="form">
            
            <h1 style={{textAlign:"center",padding:"5px"}}>LOGIN</h1>
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Username </label>
                    <input type="text" name="uname" required />
                    {renderErrorMessage("uname")}
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input type="password" name="pass" required />
                    {renderErrorMessage("pass")}
                </div>
                <div className="button-container">
                    <input type="submit" />
                </div>
            </form>
        </div>
    );

    return (
        <div className="app" id='login_id'>
            <div className="login-form">
                {isSubmitted ? navigate('/admin') : renderForm}
            </div>
        </div>
    );
}

export default Login;