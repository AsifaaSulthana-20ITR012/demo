import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import axios from "axios";
import "./login.css";

function Signuppage() {
  
    const [item, setItem] = useState({
        name: '',
        uname: '',
        email: '',
        password: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    // User Login info
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();
        setIsSubmitted(true);
        console.log(item);
        axios({
            method: 'post',
            url: 'http://localhost:5000/uploadSignup',
            data: item //formData
        })
    }
    // JSX code for login form
    const renderForm = (
        <div className="form">
            <h1 style={{textShadow:"0px 5px 10px #818165",textAlign:"center"}}>Add admin</h1>
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Name </label>
                    <input type="text" name="name" onChange={e => setItem({ ...item, name: e.target.value })} required />
                    <label>Username </label>
                    <input type="text" name="uname" onChange={e => setItem({ ...item, uname: e.target.value })} required />
                    <label>MailId </label>
                    <input type="text" name="email" onChange={e => setItem({ ...item, email: e.target.value })} required />
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input type="password" name="pass" onChange={e => setItem({ ...item, password: e.target.value })} required />
                </div>
                <div className="button-container">
                    <input type="submit" />
                </div>
            </form>
            <div>
            </div>
        </div>
    );

    return (
        <div className="app">
            <div className="login-form">
                {isSubmitted ? navigate('/admin') : renderForm}
            </div>
        </div>
    );
}

export default Signuppage