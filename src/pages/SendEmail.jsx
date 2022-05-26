import React from 'react';
import '../styles/SendEmail.scss';

const SendEmail = () => {
    return (
        <div className="SendEmail">
            <div className="SendEmail-container">
                <img src="./Platzi_YardSale_Logos/logo_yard_sale.svg" alt="logo" className="logo" />
                <h1 className="tittle">Email has been sent!</h1>
                <p className="subtitle">please check your inbox for instructions on how to reset the password</p>
                <div className="email-image">
                    <img src="/Platzi_YardSale_Icons/email.svg" alt="email" />
                </div>
                <button className="primary-button login-button">Login</button>
                <p className="resend" />
                <span>Didn´t receive the email?</span>
                <a href="/">Resend</a>
            </div>
        </div>
    );
}

export default SendEmail;