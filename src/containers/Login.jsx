import React from 'react';
import "../styles/Login.scss";

function Login() {
    return (
        <>
            <div className="login">
                <div className="form-container">
                    <img src="../../public/assets/pictures/logo_yard_sale.svg" alt="logo" className="logo" />
                    
                    <form action="#" className="form">
                        <label htmlFor="mail" className="label">Email address</label>
                        <input type="email" id="mail" placeholder="Enter your email..." className="input input-email" />

                        <label htmlFor="password" className="label">Password</label>
                        <input type="password" id="password" placeholder="Enter your password..." className="input input-password" />

                        <input type="submit" value="Log in" className="primary-button login-button" />

                        <a href="/">Forgot my password</a>
                    </form>

                    <button className="signup-button secondary-button">Sign Up</button>
                </div>
            </div>
        </>
    );
};

export {Login}